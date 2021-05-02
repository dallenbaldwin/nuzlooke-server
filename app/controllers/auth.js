import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as userController from './user.js';
import { isUndefined } from '../util/UtilMethods.js';
import APIResponse from '../models/APIResponse.js';
import User from '../models/User.js';
import { OAuth2Client } from 'google-auth-library';
import FacebookAPI from '../models/FacebookAPI.js';

const secret = process.env.JWT_SECRET;
const oneDay = 86400; // expire tokens in 24 hours

const buildToken = id => jwt.sign({ id: id }, secret, { expiresIn: oneDay });

export const verifyToken = (request, response, next) => {
   if (process.env.NODE_ENV === 'production') {
      const token = request.headers['x-auth-token'];
      if (isUndefined(token))
         return response
            .status(403)
            .send(APIResponse.withError('No x-auth-token was provided'));

      jwt.verify(token, secret, (err, decoded) => {
         if (err) return response.status(500).send(APIResponse.withError(err));

         request._user_id = decoded.id;
         next();
      });
   } else {
      next();
   }
};

export const register = (request, response) => {
   const errors = userController.getCreateErrors(request.body);
   if (!request.body || !isUndefined(errors))
      return response.status(500).send(APIResponse.withError(errors));

   User.readByEmail(request.body.email, readRes => {
      if (readRes.error)
         return response.status(500).send(APIResponse.withError(readRes.error));

      if (readRes.data.length !== 0) {
         let message = `${request.body.email} is already being used by another user. Please use another email or Sign In.`;
         return response.status(403).send(APIResponse.withError(message));
      }

      request.body.password = bcrypt.hashSync(request.body.password, 10);
      User.create(request.body, createRes => {
         if (createRes.error)
            return response.status(500).send(APIResponse.withError(createRes.error));

         const sanitizedUser = createRes.data;
         sanitizedUser.password = undefined;
         sanitizedUser.token = buildToken(sanitizedUser.id);

         return response.status(201).send(APIResponse.withResponse(sanitizedUser));
      });
   });
};

export const login = (request, response) => {
   const errors = userController.getCreateErrors(request.body);
   if (!request.body || !isUndefined(errors))
      return response.status(500).send(APIResponse.withError(errors));

   User.readByEmail(request.body.email, res => {
      if (res.error)
         return response.status(500).send(APIResponse.withError(res.error.stack));

      if (res.data.length === 0) {
         let message = `There are no users with the email ${request.body.email}. Please use an existing email or Register.`;
         return response.status(404).send(APIResponse.withError(message));
      }

      const sanitizedUser = res.data[0];

      if (!sanitizedUser.password) {
         let message = `${sanitizedUser.email} doesn't have an associated password. Please log in using the 3rd Party provider you registered with.`;
         return response.status(418).send(APIResponse.withError(message));
      }

      const passwordIsValid = bcrypt.compareSync(
         request.body.password,
         sanitizedUser.password
      );
      if (!passwordIsValid) {
         let message = `${request.body.password} is not the correct password for the user associated with ${sanitizedUser.email}. If you have forgotten your password, please contact our support team at babaldwin.codes@gmail.com to get your password changed`;
         return response.status(401).send(APIResponse.withError(message));
      }

      sanitizedUser.password = undefined;
      sanitizedUser.token = buildToken(sanitizedUser.id);
      response.status(200).send(APIResponse.withResponse(sanitizedUser));
   });
};

export const oauth = (request, response) => {
   if (!request.body.token)
      return response.status(500).send(APIResponse.withError('Missing token'));
   if (request.params.provider === 'google')
      return withGoogle(request.body.token, response);
   else if (request.params.provider === 'facebook')
      return withFacebook(request.body.token, response);
};

const loginWithPayload = async (payload, response) => {
   User.readByEmail(payload.email, readRes => {
      if (readRes.error)
         return response.status(500).send(APIResponse.withError(readRes.error.stack));

      let user;
      if (readRes.data.length === 0) {
         const userPayload = {
            email: payload.email,
            username: payload.name,
         };
         User.create(userPayload, createRes => {
            if (createRes.error)
               return response
                  .status(500)
                  .send(APIResponse.withError(createRes.error.stack));
            user = createRes.data;
            user.token = buildToken(user.id);
            return response.status(201).send(APIResponse.withResponse(user));
         });
      } else {
         user = readRes.data[0];
         user.token = buildToken(user.id);
         return response.status(201).send(APIResponse.withResponse(user));
      }
   });
};

const withGoogle = async (token, response) => {
   const appId = process.env.GOOGLE_AUTH_CLIENT_ID;
   const client = new OAuth2Client(appId);
   const ticket = await client.verifyIdToken({
      idToken: token,
      audience: appId,
   });

   const payload = ticket.getPayload();
   if (!payload) {
      let message = `There was an error getting user data from Google.`;
      return response.status(500).send(APIResponse.withError(message));
   }

   if (!payload.email) {
      let message = `This Google account does not have a valid email address associated with it.`;
      return response.status(403).send(APIResponse.withError(message));
   }

   return loginWithPayload(payload, response);
};

const withFacebook = async (token, response) => {
   const userData = await getFacebookData(token);

   if (userData.error)
      return response.status(500).send(APIResponse.withError(userData.error));

   if (!userData.email) {
      let message = `This Facebook account does not have a valid email address associated with it.`;
      return response.status(403).send(APIResponse.withError(message));
   }

   return loginWithPayload(userData, response);
};

const getFacebookData = async token => {
   try {
      const response = await FacebookAPI.get(`/me`, {
         params: {
            fields: 'name,email',
            access_token: token,
         },
      });
      return response.data;
   } catch (err) {
      return { error: err.response.data.error };
   }
};

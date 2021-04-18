import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import * as userController from './user.js';
import { isUndefined } from '../util/UtilMethods.js';
import APIResponse from '../models/APIResponse.js';
import User from '../models/User.js';

const secret = process.env.JWT_SECRET;
const oneDay = 86400; // expire tokens in 24 hours

export const verifyToken = (request, response, next) => {
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

      request.body.password = bcrypt.hashSync(request.body.password, 8);
      User.create(request.body, createRes => {
         if (createRes.error)
            return response.status(500).send(APIResponse.withError(createRes.error));

         const sanitizedUser = createRes.data;
         sanitizedUser.password = undefined;
         sanitizedUser.token = jwt.sign({ id: sanitizedUser.id }, secret, {
            expiresIn: oneDay,
         });

         return response.status(201).send(APIResponse.withResponse(sanitizedUser));
      });
   });
};

export const login = (request, response) => {
   User.readByEmail(request.body.email, res => {
      if (res.error) return response.status(500).send(APIResponse.withError(res.error));

      if (res.data.length === 0) {
         let message = `There are no users with the email ${request.body.email}. Please use an existing email or Register.`;
         return response.status(404).send(APIResponse.withError(message));
      }

      const sanitizedUser = res.data[0];
      const passwordIsValid = bcrypt.compareSync(
         request.body.password,
         sanitizedUser.password
      );
      if (!passwordIsValid) {
         let message = `${request.body.password} is not the correct password for the user associated with ${request.body.email}. Please contact our support team to get your password changed`;
         return response.status(401).send(APIResponse.withError(message));
      }

      sanitizedUser.password = undefined;
      sanitizedUser.token = jwt.sign({ id: sanitizedUser.id }, secret, {
         expiresIn: oneDay,
      });
      response.status(200).send(APIResponse.withResponse(sanitizedUser));
   });
};

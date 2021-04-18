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

      if (readRes.data.length !== 0)
         return response
            .status(403)
            .send(
               APIResponse.withError(
                  `A user already exists with email: ${request.body.email}`
               )
            );

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

      if (res.data.length === 0)
         return response
            .status(404)
            .send(APIResponse.withMissingObject('user', request.body.email));

      const sanitizedUser = res.data[0];
      const passwordIsValid = bcrypt.compareSync(
         request.body.password,
         sanitizedUser.password
      );
      if (!passwordIsValid) return response.status(401).send({ token: null });

      sanitizedUser.password = undefined;
      sanitizedUser.token = jwt.sign({ id: sanitizedUser.id }, secret, {
         expiresIn: oneDay,
      });
      response.status(200).send(APIResponse.withResponse(sanitizedUser));
   });
};

import User from '../models/User.js';
import APIResponse from '../models/APIResponse.js';
import { isUndefined, toAWSItem } from '../util/UtilMethods.js';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const createUser = (request, response) => {
   const errors = getCreateErrors(request.body);
   if (!request.body || !isUndefined(errors))
      return response.status(400).send(APIResponse.withError(errors));

   User.create(request.body, res => {
      if (res.error)
         return response.status(500).send(APIResponse.withError(res.error.stack));

      return response.status(201).send(APIResponse.withResponse(res.data));
   });
};

export const readUser = (request, response) => {
   const token = request.headers['x-auth-token'];
   if (!token)
      return response
         .status(401)
         .send(APIResponse.withError('No x-auth-token was provided'));

   jwt.verify(token, secret, (err, decoded) => {
      if (err)
         return response
            .status(500)
            .send(APIResponse.withError('Failed to authenticate token'));

      User.read(decoded.id, res => {
         if (res.error)
            return response.status(500).send(APIResponse.withError(res.error.stack));

         if (!res.data.id)
            return response
               .status(404)
               .send(APIResponse.withMissingObject('user', request.params.id));

         const sanitizedUser = res.data;
         sanitizedUser.password = undefined;

         return response.status(200).send(APIResponse.withResponse(sanitizedUser));
      });
   });
};

export const updateUser = (request, response) => {
   User.read(request.params.id, res => {
      if (!res.data.id) {
         return response
            .status(404)
            .send(APIResponse.withMissingObject('user', request.params.id));
      } else {
         // want to make sure we don't accidentally call this, so explicit else
         User.update(request.params.id, request.body, res => {
            if (res.error)
               return response.status(500).send(APIResponse.withError(res.error.stack));

            return response.status(200).send(APIResponse.withResponse(res.data));
         });
      }
   });
};

export const readUserGames = (request, response) => {
   User.read(request.params.id, res => {
      if (res.error) return response.status(500).send(APIResponse.withError(res.error));

      if (!res.data.id)
         return response
            .status(404)
            .send(APIResponse.withMissingObject('user', request.params.id));

      return response.status(200).send(APIResponse.withResponse(res.data));
   });
};

// export const authenticate = async (request, response) => {}

export const getCreateErrors = user => {
   const errors = [];
   if (!user.email) errors.push('Missing user email');
   if (!user.password) errors.push('Missing user password');
   return errors.length > 0 ? errors : undefined;
};

export const parseUpdateObject = object => {
   const sets = [];
   const values = {};
   let awsObject = toAWSItem(object);
   if (!isUndefined(object.email)) {
      sets.push('email = :email');
      values[':email'] = awsObject.email;
   }
   if (!isUndefined(object.password)) {
      sets.push('password = :password');
      values[':password'] = awsObject.password;
   }
   if (!isUndefined(object.username)) {
      sets.push('username = :username');
      values[':username'] = awsObject.username;
   }
   if (!isUndefined(object.games)) {
      sets.push('games = :games');
      values[':games'] = awsObject.games;
   }
   if (!isUndefined(object.app_settings)) {
      sets.push('app_settings = :app_settings');
      values[':app_settings'] = awsObject.app_settings;
   }
   const hasUpdates = sets.length > 0;
   return {
      updateExpression: hasUpdates ? `set ${sets.join(', ')}` : undefined,
      expressionAttributeValues: hasUpdates ? values : undefined,
   };
};

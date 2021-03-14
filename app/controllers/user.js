import User from '../models/User.js';
import APIResponse from '../models/APIResponse.js';
import { isUndefined } from '../util/UtilMethods.js';

export function createUser(request, response) {
   const errors = getCreateErrors(request.body);
   if (!request.body || !isUndefined(errors))
      return response
         .status(400)
         .send(APIResponse.withError(400, 'Invalid Request body', errors));

   User.create(request.body, res => {
      if (res.error)
         return response
            .status(500)
            .send(APIResponse.withError(500, res.message, res.error.stack));

      return response
         .status(201)
         .send(APIResponse.withResponse(201, res.message, res.data));
   });
}

export function readUser(request, response) {
   User.read(request.params.id, res => {
      if (res.error)
         return response
            .status(500)
            .send(APIResponse.withError(500, res.error.message, res.error.stack));

      if (!res.data.id)
         return response.status(404).send(
            APIResponse.withError(404, 'User does not exist', {
               id: request.params.id,
            })
         );

      return response
         .status(200)
         .send(APIResponse.withResponse(200, res.message, res.data));
   });
}

export function updateUser(request, response) {
   User.read(request.params.id, res => {
      if (!res.data.id) {
         return response.status(404).send(
            APIResponse.withError(404, 'User does not exist', {
               id: request.params.id,
            })
         );
      } else {
         // want to make sure we don't accidentally call this, so explicit else
         User.update(request.params.id, request.body, res => {
            if (res.error)
               return response
                  .status(500)
                  .send(APIResponse.withError(500, res.error.message, res.error.stack));

            return response
               .status(200)
               .send(APIResponse.withResponse(200, res.message, res.data));
         });
      }
   });
}

export function readUserGames(request, response) {
   User.read(request.params.id, res => {
      if (res.error)
         return response
            .status(500)
            .send(APIResponse.withError(500, res.error.message, res.error.stack));

      if (!res.data.id)
         return response.status(404).send(
            APIResponse.withError(404, 'User does not exist', {
               id: request.params.id,
            })
         );

      return response
         .status(200)
         .send(APIResponse.withResponse(200, res.message, { games: res.data.games }));
   });
}

// export function authenticate(request, response) {}

function getCreateErrors(user) {
   const errors = [];
   if (!user.email) errors.push('Missing user email');
   if (!user.password) errors.push('Missing user password');
   return errors.length > 0 ? errors : undefined;
}

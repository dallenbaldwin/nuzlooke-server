import APIResponse from '../models/APIResponse.js';
import Game from '../models/Game.js';
import { isUndefined } from '../util/UtilMethods.js';

export function createGame(request, response) {
   const errors = getErrors(request.body);
   if (!request.body || !isUndefined(errors))
      return response.status(400).send(APIResponse.withError(errors));

   Game.create(request.body, res => {
      if (res.error)
         return response.status(500).send(APIResponse.withError(res.error.stack));

      return response.status(201).send(APIResponse.withResponse(res.data));
   });
}

export function readGame(request, response) {
   Game.read(request.params.id, res => {
      if (res.error)
         return response.status(500).send(APIResponse.withError(res.error.stack));

      if (!res.data.id)
         return response
            .status(404)
            .send(APIResponse.withMissingObject('game', request.params.id));

      return response.status(200).send(APIResponse.withResponse(res.data));
   });
}

export function updateGame(request, response) {
   Game.read(request.params.id, res => {
      if (!res.data.id) {
         return response
            .status(404)
            .send(APIResponse.withMissingObject('game', request.params.id));
      } else {
         // want to make sure we don't accidentally call this, so explicit else
         Game.update(request.params.id, request.body, res => {
            if (res.error)
               return response.status(500).send(APIResponse.withError(res.error.stack));

            return response.status(200).send(APIResponse.withResponse(res.data));
         });
      }
   });
}

export function deleteGame(request, response) {
   Game.delete(request.params.id, res => {
      if (res.error) return response.status(500).send(res.error.stack);

      if (res.data.code) return response.status(404).send(res.data);

      return response.status(410).send(res.data);
   });
}

function getErrors(game) {
   const errors = [];
   if (!game.label) errors.push('Missing game name');
   if (!game.version) errors.push('Missing game version');
   return errors.length > 0 ? errors : undefined;
}

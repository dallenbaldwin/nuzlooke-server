import { verifyToken } from '../controllers/auth.js';
import { getEncounters } from '../controllers/encounters/encounters.js';
import APIResponse from '../models/APIResponse.js';

export default app => {
   app.get(
      '/api/encounters/:version',
      verifyToken,
      true
         ? (_, res) => {
              res.status(405).send(
                 APIResponse.withError(
                    'encounters endpoint is broken when watch mode is enabled'
                 )
              );
           }
         : getEncounters
   );
};

import { verifyToken } from '../controllers/auth.js';
import { getEncounters } from '../controllers/encounters/encounters.js';

export default app => {
   app.get('/api/encounters/:versionGroup', verifyToken, getEncounters);
};

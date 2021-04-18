import { createGame, readGame, updateGame, deleteGame } from '../controllers/game.js';
import { verifyToken } from '../controllers/auth.js';

export default app => {
   app.post('/api/games', verifyToken, createGame);
   app.get('/api/games/:id', verifyToken, readGame);
   app.put('/api/games/:id', verifyToken, updateGame);
   app.delete('/api/games/:id', verifyToken, deleteGame);
};

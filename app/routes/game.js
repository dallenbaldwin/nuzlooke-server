import { createGame, readGame, updateGame, deleteGame } from '../controllers/game.js';

export default app => {
   app.post('/api/games', createGame);
   app.get('/api/games/:id', readGame);
   app.put('/api/games/:id', updateGame);
   app.delete('/api/games/:id', deleteGame);
};

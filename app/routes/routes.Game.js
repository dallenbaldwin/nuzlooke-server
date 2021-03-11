import * as games from '../controllers/controllers.Game.js';

export default app => {
   app.post('/api/games', games.createGame);
   app.get('/api/games/:id', games.readGame);
   app.put('/api/games', games.updateGame);
   app.delete('/api/games/:id', games.deleteGame);
};

import * as controller from '../controllers/game.js';

export default app => {
   app.post('/api/games', controller.createGame);
   app.get('/api/games/:id', controller.readGame);
   app.put('/api/games/:id', controller.updateGame);
   app.delete('/api/games/:id', controller.deleteGame);
};

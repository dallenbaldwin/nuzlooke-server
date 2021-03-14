import * as controller from '../controllers/user.js';

export default app => {
   app.post('/api/users', controller.createUser);
   app.get('/api/users/:id', controller.readUser);
   app.put('/api/users/:id', controller.updateUser);
   app.get('/api/users/games/:id', controller.readUserGames);
};

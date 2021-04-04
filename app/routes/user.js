import { createUser, readUser, updateUser, readUserGames } from '../controllers/user.js';

export default app => {
   app.post('/api/users', createUser);
   app.get('/api/users/:id', readUser);
   app.put('/api/users/:id', updateUser);
   app.get('/api/users/games/:id', readUserGames);
};

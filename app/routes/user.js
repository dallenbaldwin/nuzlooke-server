import { createUser, readUser, updateUser } from '../controllers/user.js';
import { verifyToken } from '../controllers/auth.js';

export default app => {
   app.post('/api/users', verifyToken, createUser);
   app.get('/api/users/:id', verifyToken, readUser);
   app.put('/api/users/:id', verifyToken, updateUser);
};

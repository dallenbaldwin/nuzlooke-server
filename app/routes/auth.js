import { register, login } from '../controllers/auth.js';

export default app => {
   app.post('/api/register', register);
   app.post('/api/login', login);
};

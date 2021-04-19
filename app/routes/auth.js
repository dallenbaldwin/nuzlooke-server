import { register, login, oauth } from '../controllers/auth.js';

export default app => {
   app.post('/api/register', register);
   app.post('/api/login', login);
   app.post('/api/oauth/:provider', oauth);
};

import express from 'express';
import cors from 'cors';
import { PORT, HOST } from './app/config/server.js';

const app = express();

// TODO: customize cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set routes
import gameRoutes from './app/routes/game.js';
gameRoutes(app);

import userRoutes from './app/routes/user.js';
userRoutes(app);

app.get('/', (req, res) => {
   res.status(200).send({
      message: 'welcome to the nuzlooke-server',
   });
});

app.listen(PORT, () => {
   console.log(`server listening on http://${HOST}:${PORT}/`);
});

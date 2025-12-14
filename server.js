import express from 'express';
import cors from 'cors';
import Environment from './app/constants/Environment.js';
import { devLogger } from './app/util/Logger.js';

let port = 3000;
let host = 'localhost';
let origin = `http://localhost:8080`;

// we're not deploying this anymore
// if (Environment.IS_PROD) {
//    port = 8080;
//    origin = 'https://nuzlooke.netlify.app';
// }

const app = express();

app.use(
   cors({
      origin: origin,
      optionsSuccessStatus: 200,
   })
);
app.use(express.json({ limit: '400kb' }));
app.use(express.urlencoded({ extended: true, limit: '400kb' }));

// check to see if database tables exist
import { runDiagnostics, deleteTables } from './app/controllers/dataClient.js';
runDiagnostics();
// deleteTables();

// set routes
import gameRoutes from './app/routes/game.js';
gameRoutes(app);

import userRoutes from './app/routes/user.js';
userRoutes(app);

import authRoutes from './app/routes/auth.js';
authRoutes(app);

import encounterRoutes from './app/routes/encounters.js';
encounterRoutes(app);

app.get('/', async (req, res) => {
   res.status(200).send({
      message: `welcome to the nuzlooke-server.`,
   });
});

app.listen(port, () => {
   devLogger(
      `server listening on http://${host}:${port}/`,
      `the server is in ${Environment.NODE_ENV} mode.`,
      !Environment.IS_PROD ? 'DynamoDB available at http://localhost:8001' : ''
   );
});

/*
in case you don't end it right

fuser -n tcp 3000

*/

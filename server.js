import express from 'express';
import cors from 'cors';
import { PORT, HOST } from './app/config/server.js';

const app = express();

// TODO: customize cors
app.use(cors());
app.use(express.json({ limit: '400mb' }));
app.use(express.urlencoded({ extended: true, limit: '400mb' }));

// import DataClient from './app/models/DataClient.js';
// DataClient.deleteTable({ TableName: 'users' }).promise().then(console.log);
// DataClient.deleteTable({ TableName: 'games' }).promise().then(console.log);

// check to see if database tables exist
import runDiagnostics from './app/controllers/dataClient.js';
runDiagnostics();

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

// fuser -n tcp 3000 in case you don't end it right

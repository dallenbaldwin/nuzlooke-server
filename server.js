import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

export const PORT = process.env.NODE_ENV === 'dev' ? 3000 : 8080;
export const HOST = 'localhost';

const app = express();
dotenv.config();

// TODO: customize cors
app.use(cors());
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

app.get('/', (req, res) => {
   res.status(200).send({
      message: 'welcome to the nuzlooke-server',
   });
});

app.listen(PORT, () => {
   console.log(`server listening on http://${HOST}:${PORT}/`);
   console.log(`the server is in ${process.env.NODE_ENV} mode.`);
});

/*
in case you don't end it right

fuser -n tcp 3000

*/

import express from 'express';
import cors from 'cors';
import { PORT, HOST } from './app/config/server.config.js';

const app = express();

// FIXME: customize cors
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set routes

// FIXME: import the database in the model files later
import dynamodb from './app/models/db.js';

app.get('/', (req, res) => {
   res.status(200).send({
      message: 'welcome to the nuzlooke-server',
   });
});

app.listen(PORT, () => {
   console.log(`server listening on http://${HOST}:${PORT}/`);
});

import DataClient from '../models/DataClient.js';
import games from '../models/database/games.js';
import users from '../models/database/users.js';

const getTables = async () => {
   try {
      const tables = await DataClient.listTables().promise();
      return tables.TableNames;
   } catch (err) {
      console.error(err);
   }
};

const createGamesTable = async () => {
   try {
      const gamesTable = await DataClient.createTable(games).promise();
      console.log(gamesTable.TableDescription);
   } catch (err) {
      console.error(err);
   }
};

const createUsersTable = async () => {
   try {
      const usersTable = await DataClient.createTable(users).promise();
      console.log(usersTable.TableDescription);
   } catch (err) {
      console.error(err);
   }
};

export default async () => {
   try {
      const tables = await getTables();
      if (!tables.includes('users')) {
         await createUsersTable();
      }
      if (!tables.includes('games')) {
         await createGamesTable();
      }
      console.log('Connected to DynamoDB with tables: ', tables);
   } catch (err) {
      console.error(err);
   }
};

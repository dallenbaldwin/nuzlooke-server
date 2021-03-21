import DataClient from '../models/DataClient.js';
import games from '../models/database/games.js';
import users from '../models/database/users.js';

async function getTables() {
   try {
      const tables = await DataClient.listTables().promise();
      return tables.TableNames;
   } catch (err) {
      console.error(err);
   }
}

async function createGamesTable() {
   try {
      const gamesTable = await DataClient.createTable(games).promise();
      console.log(gamesTable.TableDescription);
   } catch (err) {
      console.error(err);
   }
}

async function createUsersTable() {
   try {
      const usersTable = await DataClient.createTable(users).promise();
      console.log(usersTable.TableDescription);
   } catch (err) {
      console.error(err);
   }
}

export default async function runDiagnostics() {
   try {
      const tables = await getTables();
      if (!tables.includes('Users')) {
         await createUsersTable();
      }
      if (!tables.includes('Games')) {
         await createGamesTable();
      }
      console.log('Connected to DynamoDB with tables: ', tables);
   } catch (err) {
      console.error(err);
   }
}

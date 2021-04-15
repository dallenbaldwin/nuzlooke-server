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

const createTable = async tableDefinition => {
   try {
      const response = await DataClient.createTable(tableDefinition).promise();
      console.log(response.TableDescription);
   } catch (err) {
      console.error(err);
   }
};

const deleteTable = async tableName => {
   try {
      const response = await DataClient.deleteTable({ TableName: tableName }).promise();
      console.log(response.TableDescription);
   } catch (err) {
      console.error(err);
   }
};

export const deleteTables = async () => {
   await deleteTable(games.TableName);
   await deleteTable(users.TableName);
};

export const runDiagnostics = async () => {
   try {
      const tables = await getTables();
      if (!tables) throw 'tables is undefined';
      if (!tables.includes(users.TableName)) {
         await createTable(users);
      }
      if (!tables.includes(games.TableName)) {
         await createTable(games);
      }
      console.log('Connected to DynamoDB with tables: ', tables);
   } catch (err) {
      console.error(err);
   }
};

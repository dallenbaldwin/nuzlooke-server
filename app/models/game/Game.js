import DataClient from '../DataClient.js';
import { fromAWSItem, toAWSItem } from '../../util/UtilMethods.js';
import { buildGyms } from '../../controllers/gyms.js';
import { buildVersion, parseUpdateObject } from '../../controllers/game.js';
import EncounterController from '../../controllers/encounters.js';
import uuid_pkg from 'uuid';
const { v4: uuid } = uuid_pkg;

export default class Game {
   constructor(object) {
      this.id = uuid();
      this.label = object.label;
      this.version = buildVersion(object.version);
      this.is_finished = false;
      this.encounters = [];
      this.pokemons = [];
      this.gyms = buildGyms(this.version.version_group);
      this.game_rules = object.game_rules || [];
   }
   static async create(object, result) {
      try {
         const game = new Game(object);
         // can't make an internal function here... so it's ugly
         const encounterController = new EncounterController(game.version);
         await encounterController.buildLocations();
         game.encounters = encounterController.locations;
         // convert to aws and put
         const item = toAWSItem(game);
         const put = await DataClient.putItem({
            TableName: 'games',
            Item: item,
            ReturnConsumedCapacity: 'TOTAL',
         }).promise();
         result({ data: game });
      } catch (err) {
         result({ error: err });
      }
   }
   static async read(id, result) {
      try {
         const game = await DataClient.getItem({
            TableName: 'games',
            Key: { id: { S: id } },
         }).promise();
         result({ data: fromAWSItem(game.Item) });
      } catch (err) {
         result({ error: err });
      }
   }
   static async update(gameId, attributes, result) {
      try {
         const parsedResult = parseUpdateObject(attributes);
         const updated = await DataClient.updateItem({
            TableName: 'games',
            Key: { id: { S: gameId } },
            ReturnValues: 'ALL_NEW',
            UpdateExpression: parsedResult.updateExpression,
            ExpressionAttributeValues: parsedResult.expressionAttributeValues,
         }).promise();
         result({
            data: fromAWSItem(updated.Attributes),
         });
      } catch (err) {
         result({ error: err });
      }
   }
   static async delete(id, result) {
      try {
         const response = await DataClient.deleteItem({
            TableName: 'games',
            Key: { id: { S: id } },
            // this lets you check to see if there was anything deleted.
            // by design, AWS successfully deletes something that doesn't exist
            ReturnValues: 'ALL_OLD',
         }).promise();
         if (!response.Attributes) return result({ data: { code: 404 } });
         result({ data: id });
      } catch (err) {
         result({ error: err });
      }
   }
}

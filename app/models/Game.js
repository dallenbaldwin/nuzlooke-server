import DataClient from './DataClient.js';
import { fromAWSItem, toAWSItem, isUndefined } from '../util/UtilMethods.js';
import { getVersion } from './constants/GameVersion.js';
import { listGyms } from '../controllers/gyms.js';
import EncounterController from '../controllers/encounters.js';
import { getDefaultRules } from '../controllers/gameRules.js';
import uuid_pkg from 'uuid';
const { v4: uuid } = uuid_pkg;

export default class Game {
   // {label: String, version: GameVersion (Dictionary label) }
   constructor(object) {
      this.id = uuid();
      this.label = object.label;
      this.version = getVersion(object.version.toUpperCase());
      this.is_finished = false;
      this.encounters = [];
      this.pokemons = [];
      this.gyms = listGyms(this.version.family);
      this.game_rules = getDefaultRules();
   }
   static async create(object, result) {
      try {
         const game = new Game(object);
         // can't make an internal function here... so it's ugly
         const encounterController = new EncounterController(game.version.api_data);
         await encounterController.buildLocations();
         encounterController.sortLocationsByLabel();
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

function parseUpdateObject(object) {
   const sets = [];
   const values = {};
   let awsObject = toAWSItem(object);
   if (!isUndefined(object.label)) {
      sets.push('label = :label');
      values[':label'] = awsObject.label;
   }
   if (!isUndefined(object.version)) {
      const versionData = getVersion(
         !isUndefined(object.version.label) ? object.version.label : object.version
      );
      object.version = versionData;
      awsObject = toAWSItem(object);
      sets.push('version = :version');
      values[':version'] = awsObject.version;
   }
   if (!isUndefined(object.is_finished)) {
      sets.push('is_finished = :is_finished');
      values[':is_finished'] = awsObject.is_finished;
   }
   if (!isUndefined(object.encounters)) {
      sets.push('encounters = :encounters');
      values[':encounters'] = awsObject.encounters;
   }
   if (!isUndefined(object.pokemons)) {
      sets.push('pokemons = :pokemons');
      values[':pokemons'] = awsObject.pokemons;
   }
   if (!isUndefined(object.gyms)) {
      sets.push('gyms = :gyms');
      values[':gyms'] = awsObject.gyms;
   }
   if (!isUndefined(object.game_rules)) {
      sets.push('game_rules = :game_rules');
      values[':game_rules'] = awsObject.game_rules;
   }
   const hasUpdates = sets.length > 0;
   return {
      updateExpression: hasUpdates ? `set ${sets.join(', ')}` : undefined,
      expressionAttributeValues: hasUpdates ? values : undefined,
   };
}

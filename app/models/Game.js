import DataClient from './DataClient.js';
import { fromAWSItem, toAWSItem, isUndefined } from '../util/Util.js';
import { getVersion } from './constants/GameVersion.js';
import Gyms from '../controllers/gyms.js';
import Encounters from '../controllers/encounters.js';
import uuid_pkg from 'uuid';
const { v4: uuid } = uuid_pkg;

// TODO refactor to include Game Version and Version Family changes
export default class Game {
   // {label: String, version: GameVersion (Dictionary label) }
   constructor(object) {
      this.id = uuid();
      this.label = object.label;
      this.version = getVersion(object.version.toUpperCase());
      this.is_finished = false;
      this.encounters = object.encounters || []; // Encounters(this.version.family);
      this.pokemons = [];
      this.gyms = Gyms(this.version.family);
      this.game_rules = [];
   }
   static async create(object, result) {
      try {
         const game = new Game(object);
         const item = toAWSItem(game);
         const put = await DataClient.putItem({
            TableName: 'games',
            Item: item,
            ReturnConsumedCapacity: 'TOTAL',
         }).promise();
         // result({ message: 'successfully created game', data: game });
         result({ message: 'successfully created game', data: put.ConsumedCapacity });
      } catch (err) {
         result({ message: 'error creating game', error: err });
      }
   }
   static async read(id, result) {
      try {
         const game = await DataClient.getItem({
            TableName: 'games',
            Key: { id: { S: id } },
         }).promise();
         result({ message: 'successfully read game', data: fromAWSItem(game.Item) });
      } catch (err) {
         result({ message: 'error reading game', error: err });
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
            message: 'successfully updated game',
            data: fromAWSItem(updated.Attributes),
         });
      } catch (err) {
         result({ message: 'error updating game', error: err });
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
         if (!response.Attributes)
            return result({
               message: 'no game exists with id',
               data: { code: 404, id: id },
            });
         result({ message: 'successfully deleted game', data: id });
      } catch (err) {
         result({ message: 'error deleting game', error: err });
      }
   }
   get snapshot() {
      return {
         gym_id: this.id,
         is_finished: this.is_finished,
         name: this.name,
         version: this.version,
         // party_icon_urls: this.pokemons.L.filter(p => p.party_state ===)
      };
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
   if (!isUndefined(object.version) || !isUndefined(object.version.label)) {
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

import client from './Client.js';
import { fromAWSItem, toAWSItem, isUndefined } from '../util/Util.js';
import GameVersion from './constants/GameVersion.js';
import uuid_pkg from 'uuid';
const { v4: uuid } = uuid_pkg;

export default class Game {
   constructor(game) {
      this.id = uuid();
      this.game_name = game.game_name || null;
      this.version = GameVersion(game.version);
      this.is_finished = game.is_finished || false;
      this.encounters = game.encounters || [];
      this.pokemons = game.pokemons || [];
      this.gyms = game.gyms || [];
      this.game_rules = game.game_rules || [];
   }
   static async create(game, result) {
      try {
         const g = new Game(game);
         const item = toAWSItem(g);
         await client.putItem({ TableName: 'games', Item: item }).promise();
         result({ message: 'successfully created game', data: g });
      } catch (err) {
         result({ message: 'error creating game', error: err });
      }
   }
   static async read(id, result) {
      try {
         const game = await client
            .getItem({
               TableName: 'games',
               Key: { id: { S: id } },
            })
            .promise();
         result({ message: 'successfully read game', data: fromAWSItem(game.Item) });
      } catch (err) {
         result({ message: 'error reading game', error: err });
      }
   }
   static async update(gameId, attributes, result) {
      try {
         const parsedResult = parseUpdateObject(attributes);
         const updated = await client
            .updateItem({
               TableName: 'games',
               Key: { id: { S: gameId } },
               ReturnValues: 'ALL_NEW',
               UpdateExpression: parsedResult.updateExpression,
               ExpressionAttributeValues: parsedResult.expressionAttributeValues,
            })
            .promise();
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
         const response = await client
            .deleteItem({
               TableName: 'games',
               Key: { id: { S: id } },
               // this lets you check to see if there was anything deleted.
               // by design, AWS successfully deletes something that doesn't exist
               ReturnValues: 'ALL_OLD',
            })
            .promise();
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
   if (!isUndefined(object.game_name)) {
      sets.push('game_name = :game_name');
      values[':game_name'] = awsObject.game_name;
   }
   if (!isUndefined(object.version) || !isUndefined(object.version.version_name)) {
      const versionData = GameVersion(
         !isUndefined(object.version_name) ? object.version_name : object.version
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

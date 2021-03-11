import client from './models.db.js';
import { fromAWSItem, toAWSItem } from '../util/util.js';
import uuid_pkg from 'uuid';
const { v4: uuid } = uuid_pkg;

export default class Game {
   constructor(game) {
      this.id = uuid();
      this.game_name = game.game_name || null;
      this.version = this.getGameVersion(game.version);
      this.is_finished = game.is_finished || false;
      this.encounters = game.encounters || [];
      this.pokemons = game.pokemons || [];
      this.gyms = game.gyms || [];
      this.game_rules = game.game_rules || [];
   }
   getGameVersion(name) {
      const artwork_urls = {
         letsgopikachu: null,
         letsgoeevee: 'a test value',
         alpha: null,
         sapphire: null,
         emerald: null,
      };
      return {
         version_name: name,
         artwork_urls: artwork_urls[name],
      };
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
   // FIXME: this needs to take an id and update what you pass it
   static async update(game, result) {
      try {
         const awsGame = toAWSItem(game);
         const response = await client
            .updateItem({
               TableName: 'games',
               Key: { id: { S: game.id } },
               ReturnValues: 'ALL_NEW',
               UpdateExpression: `set game_name = :game_name,
                  version = :version,
                  is_finished = :is_finished,
                  encounters = :encounters,
                  pokemons = :pokemons,
                  gyms = :gyms,
                  game_rules = :game_rules`,
               ExpressionAttributeValues: {
                  ':game_name': awsGame.game_name,
                  ':version': awsGame.version,
                  ':is_finished': awsGame.is_finished,
                  ':encounters': awsGame.encounters,
                  ':pokemons': awsGame.pokemons,
                  ':gyms': awsGame.gyms,
                  ':game_rules': awsGame.game_rules,
               },
            })
            .promise();
         result({
            message: 'successfully updated game',
            data: fromAWSItem(response.Attributes),
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

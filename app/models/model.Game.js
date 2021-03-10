import client from './db.js';
import { fromAWSItem, toAWSAttribute, toAWSItem } from '../util/util.js';
import uuid_pkg from 'uuid';
const { v4: uuid } = uuid_pkg;

export default class Game {
   constructor(object) {
      this.id = uuid();
      this.game_name = object.game_name || null;
      this.version = object.version || { version_name: null, artwork: null };
      this.is_finished = object.is_finished || false;
      this.encounters = object.encounters || [];
      this.pokemons = object.pokemons || [];
      this.gyms = object.gyms || [];
      this.game_rules = object.game_rules || [];
   }
   static async create(game, result) {
      try {
         const g = new Game(game);
         const item = toAWSItem(g);
         await client.putItem({ TableName: 'games', Item: item }).promise();
         result({ message: 'successfully created game', id: g.id });
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
         result({ message: 'successfully read game', game: fromAWSItem(game.Item) });
      } catch (err) {
         result({ message: 'error reading game', error: err });
      }
   }
   static async update(game, result) {
      try {
         const awsGame = toAWSItem(game);
         console.log(awsGame);
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
            game: fromAWSItem(response.Attributes),
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
         if (!response.Attributes) throw new Error(`game does not exist with id: ${id}`);
         result({ message: 'successfully deleted game', id: id });
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

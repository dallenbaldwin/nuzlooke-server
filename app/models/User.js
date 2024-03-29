import { fromAWSItem, toAWSItem } from '../util/UtilMethods.js';
import { parseUpdateObject } from '../controllers/user.js';
import DataClient from './DataClient.js';
import uuid_pkg from 'uuid';
import users from './database/users.js';
import { devLogger } from '../util/Logger.js';
const { v4: uuid } = uuid_pkg;

export default class User {
   constructor(object) {
      this.id = uuid();
      this.email = object.email;
      this.password = object.password;
      this.username = object.username;
      this.games = [];
   }
   static async create(object, result) {
      try {
         const user = new User(object);
         const item = toAWSItem(user);
         const put = await DataClient.putItem({
            TableName: users.TableName,
            Item: item,
            ReturnConsumedCapacity: 'TOTAL',
         }).promise();
         result({ data: user });
      } catch (err) {
         result({ error: err });
      }
   }
   static async read(id, result) {
      try {
         const user = await DataClient.getItem({
            TableName: users.TableName,
            Key: { id: { S: id } },
         }).promise();
         result({ data: fromAWSItem(user.Item) });
      } catch (err) {
         result({ error: err });
      }
   }
   static async readByEmail(email, result) {
      try {
         devLogger('scanning table for user');
         const user = await DataClient.scan({
            TableName: 'nuzlooke-users',
            ConsistentRead: false,
            FilterExpression: '#a88b0 = :a88b0',
            ExpressionAttributeValues: {
               ':a88b0': {
                  S: email,
               },
            },
            ExpressionAttributeNames: {
               '#a88b0': 'email',
            },
         }).promise();
         devLogger('user:', user);
         result({ data: user.Items.map(fromAWSItem) });
      } catch (err) {
         result({ error: err });
      }
   }
   static async update(userId, attributes, result) {
      try {
         const parsedResult = parseUpdateObject(attributes);
         const updated = await DataClient.updateItem({
            TableName: users.TableName,
            Key: { id: { S: userId } },
            ReturnValues: 'ALL_NEW',
            UpdateExpression: parsedResult.updateExpression,
            ExpressionAttributeValues: parsedResult.expressionAttributeValues,
         }).promise();
         result({ data: fromAWSItem(updated.Attributes) });
      } catch (err) {
         result({ error: err });
      }
   }
}

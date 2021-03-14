import { fromAWSItem, isUndefined, toAWSItem } from '../util/Util.js';
import DataClient from './DataClient.js';
import uuid_pkg from 'uuid';
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
            TableName: 'users',
            Item: item,
            ReturnConsumedCapacity: 'TOTAL',
         }).promise();
         result({ message: 'successfully created user', data: user });
      } catch (err) {
         result({ message: 'error creating user', error: err });
      }
   }
   static async read(id, result) {
      try {
         const user = await DataClient.getItem({
            TableName: 'users',
            Key: { id: { S: id } },
         }).promise();
         result({ message: 'successfully read user', data: fromAWSItem(user.Item) });
      } catch (err) {
         result({ message: 'error reading user', error: err });
      }
   }
   static async update(userId, attributes, result) {
      try {
         const parsedResult = parseUpdateObject(attributes);
         const updated = await DataClient.updateItem({
            TableName: 'users',
            Key: { id: { S: userId } },
            ReturnValues: 'ALL_NEW',
            UpdateExpression: parsedResult.updateExpression,
            ExpressionAttributeValues: parsedResult.expressionAttributeValues,
         }).promise();
         result({
            message: 'successfully updated user',
            data: fromAWSItem(updated.Attributes),
         });
      } catch (err) {
         result({ message: 'error updating user', error: err });
      }
   }
}

function parseUpdateObject(object) {
   const sets = [];
   const values = {};
   let awsObject = toAWSItem(object);
   if (!isUndefined(object.email)) {
      sets.push('email = :email');
      values[':email'] = awsObject.email;
   }
   if (!isUndefined(object.password)) {
      sets.push('password = :password');
      values[':password'] = awsObject.password;
   }
   if (!isUndefined(object.username)) {
      sets.push('username = :username');
      values[':username'] = awsObject.username;
   }
   if (!isUndefined(object.games)) {
      sets.push('games = :games');
      values[':games'] = awsObject.games;
   }
   const hasUpdates = sets.length > 0;
   return {
      updateExpression: hasUpdates ? `set ${sets.join(', ')}` : undefined,
      expressionAttributeValues: hasUpdates ? values : undefined,
   };
}

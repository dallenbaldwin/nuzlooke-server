import AWS from 'aws-sdk';
import config from '../config/config.db.js';

const client = new AWS.DynamoDB(config);

export default client;

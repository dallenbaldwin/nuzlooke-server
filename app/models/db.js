import AWS from 'aws-sdk';
import config from '../config/db.config.js';

const client = new AWS.DynamoDB(config);

export default client;

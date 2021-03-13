import AWS from 'aws-sdk';
import config from '../config/db.js';

const DataClient = new AWS.DynamoDB(config);

// FIXME: add logic to define and create tables if they do not exist

export default DataClient;

import AWS from 'aws-sdk';
import config from '../config/db.js';

const DataClient = new AWS.DynamoDB(config);

// Max Object size is 400KB

// FIXME: add logic to define and create tables if they do not exist

export default DataClient;

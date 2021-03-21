import AWS from 'aws-sdk';
import config from '../config/db.js';

const DataClient = new AWS.DynamoDB(config);
// Max Object size is 400KB

export default DataClient;

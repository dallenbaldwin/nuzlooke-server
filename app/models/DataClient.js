import AWS from 'aws-sdk';
import Environment from '../constants/Environment.js';
import { devLogger } from '../util/Logger.js';

const options = {
   apiVersion: '2012-08-10',
   accessKeyId: Environment.AWS_ACCESS_KEY_ID,
   secretAccessKey: Environment.AWS_SECRET_ACCESS_KEY,
   region: 'us-east-2',
   endpoint: 'http://localhost:8000',
};

// we are no longer using dynamo in actual AWS
if (Environment.IS_PROD) options.endpoint = 'http://dynamodb-local:8000';

const DataClient = new AWS.DynamoDB(options);
devLogger('Created DynamoDB DataClient.', `Endpoint: ${options.endpoint}`);
// Max Object size is 400KB

export default DataClient;

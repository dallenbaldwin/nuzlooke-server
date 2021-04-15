import AWS from 'aws-sdk';

const options = {
   apiVersion: '2012-08-10',
   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
   region: 'us-east-2',
};

if (process.env.NODE_ENV === 'dev') options.endpoint = 'http://localhost:4566';

const DataClient = new AWS.DynamoDB(options);
// Max Object size is 400KB

export default DataClient;

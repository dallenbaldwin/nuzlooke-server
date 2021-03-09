import AWS from 'aws-sdk';
import config from '../config/db.config.js';

const dynamodb = new AWS.DynamoDB(config);
dynamodb.describeLimits((err, data) => {
   if (err) return console.log(err);
   console.log('connected to AWS DynamoDB with limits: ', data);
});

export default dynamodb;

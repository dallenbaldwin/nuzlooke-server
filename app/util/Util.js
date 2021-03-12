import AWS from 'aws-sdk';

export const toAWSItem = object => AWS.DynamoDB.Converter.marshall(object);

export const fromAWSItem = object => AWS.DynamoDB.Converter.unmarshall(object);

export const isUndefined = value => value === undefined;

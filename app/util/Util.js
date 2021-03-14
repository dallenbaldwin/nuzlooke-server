import AWS from 'aws-sdk';

export const toAWSItem = object => AWS.DynamoDB.Converter.marshall(object);

export const fromAWSItem = object => AWS.DynamoDB.Converter.unmarshall(object);

export const isUndefined = value => value === undefined;

export const arrayify = (...values) => {
   const a = [];
   values.forEach(value => a.push(value));
   return a.flatMap(i => i); // force it to accept an array of values or a list of values
};

export const deClassify = classObject => JSON.parse(JSON.stringify(classObject));

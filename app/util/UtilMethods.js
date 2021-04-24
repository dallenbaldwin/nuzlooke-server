import AWS from 'aws-sdk';

export const toAWSItem = object => AWS.DynamoDB.Converter.marshall(object);

export const fromAWSItem = object => AWS.DynamoDB.Converter.unmarshall(object);

export const isUndefined = value => value === undefined || value === null;

export const arrayify = (...values) => Array.from([...values]).flatMap(i => i); // force it to accept an array of values or a list of values

export const deClassify = classObject => JSON.parse(JSON.stringify(classObject));

export const uniquify = array => {
   const transformed = new Set(array.map(a => JSON.stringify(a)));
   return [...transformed].map(t => JSON.parse(t));
};

export const getEnglish = names => names.find(name => name.language.name === 'en');

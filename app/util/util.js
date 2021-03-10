import AWS from 'aws-sdk';

export function toAWSItem(object) {
   return AWS.DynamoDB.Converter.marshall(object);
}

export function fromAWSItem(object) {
   return AWS.DynamoDB.Converter.unmarshall(object);
}

export function toAWSAttribute(item) {
   return AWS.DynamoDB.Converter.input(item, {
      convertEmptyValues: true,
   });
}

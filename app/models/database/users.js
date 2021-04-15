export default {
   AttributeDefinitions: [
      {
         AttributeName: 'id',
         AttributeType: 'S',
      },
   ],
   TableName: 'nuzlooke-users',
   ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
   },
   KeySchema: [
      {
         AttributeName: 'id',
         KeyType: 'HASH',
      },
   ],
};

// https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html

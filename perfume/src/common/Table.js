const { Table } = require('dynamodb-toolbox')
const DynamoDB = require('aws-sdk/clients/dynamodb')
const DocumentClient = new DynamoDB.DocumentClient()

const MyTable = new Table({
  name: process.env.tableName || 'local-testing',
  partitionKey: 'pk',
  sortKey: 'sk',
  DocumentClient
})

module.exports = MyTable

const AWS = require('aws-sdk')
const DocumentClient = new AWS.DynamoDB.DocumentClient()
// const { PerfumeModel } = require('./Models')

const TableName = process.env.tableName

const records = [
  { id: 1, title: 'Lorem Ipsum' },
  { id: 2, title: 'Lorem Ipsum' },
  { id: 3, title: 'Lorem Ipsum' },
  { id: 4, title: 'Lorem Ipsum' },
]

const getAllByHelper = async (field, value) => {
  const params = {
    TableName,
    KeyConditionExpression: '#field = :value',
    ExpressionAttributeNames: {
      '#field': field
    },
    ExpressionAttributeValues: {
      ':value': value
    }
  }

  const results = await DocumentClient.query(params).promise()
  return results.Items
}

const getAll = async () => getAllByHelper('pk', 'PERFUME')

const create = async (data) => {
  console.log(data);
  return data;
}

const getById = async (id) => records.filter((record) => record.id === id)

const update = async (id, data) => {
  console.log(id, data)
  const result = {
    message: 'Updated',
    data
  }
  return result
}

const remove = async (id) => {
  console.log(id)
  const result = {
    message: 'Removed',
    ...id
  }
  return result
}

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove
}

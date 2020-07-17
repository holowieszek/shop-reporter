const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')
const MyTable = require('./Table')
const Perfume = require('./Entities')
const TableName = process.env.tableName

const records = [
  { id: 1, title: 'Lorem Ipsum' },
  { id: 2, title: 'Lorem Ipsum' },
  { id: 3, title: 'Lorem Ipsum' },
  { id: 4, title: 'Lorem Ipsum' },
]

const getAll = async () => {
  const results = await MyTable.query(
    'PERFUME',
    {
      attributes: ['model', 'brand', 'capacity', 'price']
    }
  )
  return results.Items
}

const create = async (data) => {
  const item = {
    id: uuidv4(),
    brand: data.brand,
    model: data.model,
    capacity: data.capacity,
    price: data.price,
    // store: 'storename'
  }

  const result = await Perfume.put(item)
  return result
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

const { v4: uuidv4 } = require('uuid')
const MyTable = require('./Table')
const Perfume = require('./Entities')

const getAll = async () => {
  const results = await MyTable.query(
    'PERFUME',
    {
      attributes: ['sk', 'model', 'brand', 'capacity', 'price']
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
    price: data.price
  }

  const result = await Perfume.put(item)
  return result
}

const getById = async (id) => {
  const item = {
    id
  }

  const result = await Perfume.get(
    item,
    {
      attributes: ['sk', 'model', 'brand', 'capacity', 'price']
    }
  )
  return result.Item
}

const update = async (id, data) => {
  console.log(id, data)
  const result = {
    message: 'Updated',
    data
  }
  return result
}

const remove = async (id) => {
  const item = {
    id
  }

  const result = await Perfume.delete(item)
  return result
}

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove
}

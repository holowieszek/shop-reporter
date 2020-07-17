const { Entity } = require('dynamodb-toolbox')
const MyTable = require('./Table')

const Perfume = new Entity({
  name: 'Perfume',
  attributes: {
    pk: { partitionKey: true, default: 'PERFUME' },
    id: { hidden: true, sortKey: true },
    brand: { type: 'string' },
    model: { type: 'string' },
    capacity: { type: 'number' },
    price: { type: 'number' },
    store: { type: 'string' }
  },
  table: MyTable
})

module.exports = Perfume

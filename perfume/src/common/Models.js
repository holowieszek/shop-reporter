const { Model } = require('dynamodb-toolbox')

const PerfumeModel = new Model('PerfumeModel', {
  table: process.env.tableName || 'local-testing',

  partitionKey: 'pk',
  sortKey: 'sk',
  timestamps: true,

  schema: {
    pk: { type: 'string', alias: 'type', default: 'PERFUME' },
    sk: { type: 'string', alias: 'id' },
    brand: { type: 'string' },
    model: { type: 'string' },
    capacity: { type: 'number' },
    price: { type: 'number' }
  }
});

module.exports = {
  PerfumeModel
};

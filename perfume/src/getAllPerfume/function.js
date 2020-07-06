const persistence = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const { returnResponse } = require('../common/returnResponse');

const invoke = async () => {
  const results = await persistence.getAll(dbAdapter)

  return returnResponse(results);
};

exports.invoke = invoke;

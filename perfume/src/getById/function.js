const persistence = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const { returnResponse } = require('../common/returnResponse');

const invoke = async (event) => {
  const id = event.pathParameters
  const results = await persistence.getById(dbAdapter, id)

  return returnResponse(results);
};

exports.invoke = invoke;

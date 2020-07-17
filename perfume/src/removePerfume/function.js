const persistence = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const returnResponse = require('../common/returnResponse');

const invoke = async (event) => {
  const id = event.pathParameters
  const results = await persistence.remove(dbAdapter, id)

  return returnResponse(results, 201);
};

exports.invoke = invoke;

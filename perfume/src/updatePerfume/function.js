const persistence = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const returnResponse = require('../common/returnResponse');

const invoke = async (event) => {
  const data = JSON.parse(event.body)
  const id = event.pathParameters
  const results = await persistence.update(dbAdapter, id, data)

  return returnResponse(results, 201);
};

exports.invoke = invoke;

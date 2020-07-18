const persistence = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const returnResponse = require('../common/returnResponse')
const asyncWrapper = require('../common/asyncWrapper')

const invoke = async () => {
  const { error, result } = await asyncWrapper(persistence.getAll(dbAdapter))

  return !error ? returnResponse(result) : returnResponse({ error: 'Something went wrong!' }, 400)
}

exports.invoke = invoke

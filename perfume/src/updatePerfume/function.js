const persistence = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const returnResponse = require('../common/returnResponse')
const asyncWrapper = require('../common/asyncWrapper')
const validator = require('./validator')

const invoke = async (event) => {
  const data = JSON.parse(event.body)
  const { id } = event.pathParameters
  const validate = validator(data)

  if (validate.error) {
    const msg = validate.error.details[0].message
    return returnResponse({ error: msg }, 400)
  }

  const { error, result } = await asyncWrapper(persistence.update(dbAdapter, id, data))

  return !error ? returnResponse(result) : returnResponse({ error: 'Something went wrong!' }, 400)
}

exports.invoke = invoke

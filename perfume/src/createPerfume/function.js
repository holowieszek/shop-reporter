const persistence = require('../common/persistence')
const dbAdapter = require('../common/dbAdapterDynamoDb')
const asyncWrapper = require('../common/asyncWrapper')
const returnResponse = require('../common/returnResponse');
const validator = require('./validator')

const invoke = async (event) => {
  const data = JSON.parse(event.body)
  const validate = validator(data)

  if (validate.error) {
    const msg = validate.error.details[0].message
    return returnResponse({ error: msg }, 400)
  }

  const { error, result } = await asyncWrapper(persistence.create(dbAdapter, data))

  return !error ? returnResponse(result, 201) : returnResponse({ error: 'Something went wrong!' }, 400);
};

exports.invoke = invoke;

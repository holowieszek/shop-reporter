const log = require('./log')

const asyncWrapper = (promise) => {
  const resolved = promise
    .then((result) => {
      log.debug(result)

      return {
        error: null,
        result
      }
    })
    .catch((error) => {
      log.warn(error)

      return {
        error,
        result: null
      }
    })

  return resolved
}

module.exports = asyncWrapper

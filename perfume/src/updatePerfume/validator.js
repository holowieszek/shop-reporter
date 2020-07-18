const Joi = require('@hapi/joi')

const validator = (input) => {
  const schema = Joi.object().keys({
    brand: Joi.string().max(100),
    model: Joi.string().max(100),
    capacity: Joi.number(),
    price: Joi.string()
  })

  return schema.validate(input)
}

module.exports = validator

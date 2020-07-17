const Joi = require('@hapi/joi')

const validator = (input) => {
  const schema = Joi.object().keys({
    brand: Joi.string().max(100).required(),
    model: Joi.string().max(100).required(),
    capacity: Joi.number().required(),
    price: Joi.string().required()
  })

  return schema.validate(input)
}

module.exports = validator

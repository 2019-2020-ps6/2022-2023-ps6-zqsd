const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  id: Joi.string(),
  label: Joi.string().required(),
  value: Joi.string().required(),
  answers: Joi.array(),
  ImageSearching: Joi.string(),
  answered: Joi.string(),
})

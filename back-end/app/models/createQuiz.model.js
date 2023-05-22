const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')


// pas utile ? importé du front
module.exports = new BaseModel('CreateQuiz', {
  name: Joi.string().required(),
  theme: Joi.string().required(),
  question: Joi.string().required(),
  answer: Joi.array().required(),
  textSearching: Joi.string(),
})

module.exports = new BaseModel('CreateAnswer', {
  value: Joi.string().required(),
  order: Joi.string(),
  isCorrect: Joi.string(),
})

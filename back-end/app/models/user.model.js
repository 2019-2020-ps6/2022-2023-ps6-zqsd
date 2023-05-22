const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  id: Joi.string().required(), // id of the user in the database
  identifiant: Joi.string().required(), // id to log in
  motdePasse: Joi.string().required(),
  status: Joi.string().required(),
})

module.exports = new BaseModel('TimeToAnswer', {
  id: Joi.string().required(), // id of the subQuizz
  time: Joi.date().required(), // time to answer
})

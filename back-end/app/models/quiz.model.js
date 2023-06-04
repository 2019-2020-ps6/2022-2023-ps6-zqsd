const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

const quizSchema = {
  id: Joi.string().required(),
  name: Joi.string().required(),
  theme: Joi.string().required(),
  questionsId: Joi.array().items(Joi.string()), // Array of question IDs
};

module.exports = new BaseModel('Quiz', quizSchema);

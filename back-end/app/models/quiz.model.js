const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');
const { Question } = require('./question.model');

const quizSchema = {
  id: Joi.string().required(),
  name: Joi.string().required(),
  theme: Joi.string().required(),
  questionIds: Joi.array().items(Joi.string()), // Array of question IDs
  questions: Joi.array().items(Question.schema),
};

module.exports = new BaseModel('Quiz', quizSchema);

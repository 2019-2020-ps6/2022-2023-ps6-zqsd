const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

const createQuizSchema = {
  name: Joi.string().required(),
  theme: Joi.string().required(),
  question: Joi.string().required(),
  answer: Joi.array().required(),
  textSearching: Joi.string(),
};

const createAnswerSchema = {
  value: Joi.string().required(),
  order: Joi.string(),
  isCorrect: Joi.string(),
};

const createQuizModel = new BaseModel('CreateQuiz', createQuizSchema);
const createAnswerModel = new BaseModel('CreateAnswer', createAnswerSchema);

module.exports = {
  createQuizModel,
  createAnswerModel,
};

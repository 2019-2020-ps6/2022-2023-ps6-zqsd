const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

const answerSchema = {
  label: Joi.string().required(),
  value: Joi.string().required(),
  isCorrect: Joi.boolean(),
  order: Joi.number(),
};

const questionSchema = {
  id: Joi.string().required(),
  label: Joi.string().required(),
  value: Joi.string().required(),
  answers: Joi.array().items(Joi.object(answerSchema)), // Array of answer objects
  imageSearching: Joi.string().allow(null).optional(),
  answered: Joi.boolean().optional(),
};

const textSearchingSchema = {
  value: Joi.string().required(),
};

const Question = new BaseModel('Question', questionSchema);
const Answer = new BaseModel('Answer', answerSchema);
const TextSearching = new BaseModel('TextSearching', textSearchingSchema);

module.exports = {
  Question,
  Answer,
  TextSearching,
};

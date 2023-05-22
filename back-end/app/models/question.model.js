const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

const questionSchema = {
  id: Joi.string(),
  label: Joi.string().required(),
  value: Joi.string().required(),
  answers: Joi.array(),
  ImageSearching: Joi.string(),
  answered: Joi.boolean(),
};

const answerSchema = {
  label: Joi.string().required(),
  value: Joi.string().required(),
  isCorrect: Joi.boolean(),
  order: Joi.number(),
};

const textSearchingSchema = {
  value: Joi.string().required(),
};

module.exports.questionModel = new BaseModel('Question', questionSchema);
module.exports.answerModel = new BaseModel('Answer', answerSchema);
module.exports.textSearchingModel = new BaseModel('TextSearching', textSearchingSchema);

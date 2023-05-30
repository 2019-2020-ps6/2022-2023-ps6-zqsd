const { Quiz, Question } = require('../../../models')
const NotFoundError = require('../../../utils/errors/not-found-error.js')
/**
 * filterQuestionsFromQuizz.
 * This function filters among the questions to return only the question linked with the given quizId.
 * @param quizId
 */
const filterQuestionsFromQuizz = (questionsId) => {
  const questionsCherchées = [];
  for (let i = 0; i < questionsId.length; i++) {
    const question = Question.getById(questionsId[i]);
    questionsCherchées.push(question);
  }
  return questionsCherchées;
};

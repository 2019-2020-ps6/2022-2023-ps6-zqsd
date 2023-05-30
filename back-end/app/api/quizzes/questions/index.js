const { Router } = require('express')

const { Answer, Quiz, Question } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')
const AnswersRouter = require('./answers')
const { filterQuestionsFromQuizz, getQuestionFromQuiz } = require('./manager')
const { buildQuizzes } = require('../manager')

const router = new Router({ mergeParams: true })

router.get('/', (req, res) => {
  try {
    const questions = Question.get()
    res.status(200).json(questions)
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.get('/:questionId', (req, res) => {
  try {
    const question = Question.getById(req.params.questionId)
    res.status(200).json(question)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

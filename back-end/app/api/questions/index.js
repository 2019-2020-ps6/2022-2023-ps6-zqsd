const { Router } = require('express')

const manageAllErrors = require('../../utils/routes/error-management')
const { filterQuestionsFromQuizz, getQuestionFromQuiz } = require('./manager')
const { buildQuizzes } = require('./manager')
const { Question } = require('../../models/question.model')

const router = new Router()


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

router.post('/', (req, res) => {
  try {
    const question = Question.create({ ...req.body })
    res.status(201).json(quiz)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:questionId', (req, res) => {
  try {
    res.status(200).json(Question.update(req.params.questionId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:questionId', (req, res) => {
  try {
    Question.delete(req.params.questionId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router


const { Router } = require('express')

const { Quiz } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const { buildQuizz, buildQuizzes } = require('./manager')
const { User } = require('../../models/user.model')
const { Question } = require('../../models/question.model')

const router = new Router()


router.get('/', (req, res) => {
  try {
    const quizzes = Quiz.get().map((quiz) => {
      const questions = quiz.questionIds.map((questionId) => Question.getById(questionId));
      return { ...quiz, questions };
    });
    res.status(200).json(quizzes);
  } catch (err) {
    manageAllErrors(res, err);
  }
});




router.get('/:quizId', (req, res) => {
  try {
    const quiz = Quiz.getById(req.params.quizId);
    const questions = quiz.questionIds.map((questionId) => Question.getById(questionId));
    const quizWithQuestions = { ...quiz, questions };

    res.status(200).json(quizWithQuestions);
  } catch (err) {
    manageAllErrors(res, err);
  }
});




router.post('/', (req, res) => {
  try {
    const question = Quiz.create({ ...req.body })
    res.status(201).json(question)
  } catch (err) {
    manageAllErrors(res, err)
  }
})




router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.update(req.params.quizId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:quizId', (req, res) => {
  try {
    Quiz.delete(req.params.quizId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})


module.exports = router

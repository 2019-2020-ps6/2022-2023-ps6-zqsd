const { Router } = require('express')

const { Quiz } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const { buildQuizz, buildQuizzes } = require('./manager')
const { User } = require('../../models/user.model')
const { Question } = require('../../models/question.model')

const router = new Router()


router.get('/', (req, res) => {
  try {
    res.status(200).json(Quiz.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:quizId', (req, res) => {
  try {
      res.status(200).json(Quiz.getById(req.params.quizId))
    } catch (err) {
      manageAllErrors(res, err)
    }
  })


//Globalement j'ai l'idée mais ça marche pas

router.post('/', (req, res) => {
  try {
    const { questionIds, ...quizData } = req.body;

    // Récupérer les questions à partir des IDs
    const questions = questionIds.map(questionId => Question.getById(questionId));

    // Créer le quizz avec les données et les questions récupérées
    const quiz = Quiz.create({ ...quizData, questionIds, questions });

    res.status(201).json(quiz);
  } catch (err) {
    manageAllErrors(res, err);
  }
});




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

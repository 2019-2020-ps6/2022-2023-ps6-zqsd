const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const UserRouter = require('./users')
const QuestionRouter=require('./questions')
const ParameterRouter=require('./parameter')
const advancedParameters=require('./parameter/advancedParameter')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/users', UserRouter)
router.use('/questions',QuestionRouter)
router.use('/parameter',ParameterRouter)
router.use('/advancedParameter',advancedParameters)



module.exports = router

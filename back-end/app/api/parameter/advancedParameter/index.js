const { Router } = require('express');
const { AdvancedParameter } = require('../../../models/Parameter/advancedParameter.model');
const manageAllErrors = require('../../../utils/routes/error-management');

const router = new Router();


router.get('/', (req, res) => {
  try {
    res.status(200).json(AdvancedParameter.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:userId', (req, res) => {
  try {
    res.status(200).json(AdvancedParameter.getById(req.params.userId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const user = AdvancedParameter.create({ ...req.body })
    res.status(201).json(user)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:userId', (req, res) => {
  try {
    res.status(200).json(AdvancedParameter.update(req.params.userId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:userId', (req, res) => {
  try {
    AdvancedParameter.delete(req.params.userId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router

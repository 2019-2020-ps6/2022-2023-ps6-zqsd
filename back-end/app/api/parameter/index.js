const { Router } = require('express');
const { Parameter } = require('../../models/Parameter/parameter.model');
const manageAllErrors = require('../../utils/routes/error-management');

const router = new Router();


router.get('/', (req, res) => {
  try {
    res.status(200).json(Parameter.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:parameterId', (req, res) => {
  try {
    res.status(200).json(Parameter.getById(req.params.parameterId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const user = Parameter.create({ ...req.body })
    res.status(201).json(user)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:parameterId', (req, res) => {
  try {
    res.status(200).json(Parameter.update(req.params.parameterId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:parameterId', (req, res) => {
  try {
    Parameter.delete(req.params.parameterId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router

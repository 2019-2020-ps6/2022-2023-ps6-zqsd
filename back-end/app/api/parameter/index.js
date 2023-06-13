const { Router } = require('express');
const { Parameter } = require('../../models/Parameter/parameter.model');
const manageAllErrors = require('../../utils/routes/error-management');
const { Question } = require('../../models/question.model')

const router = new Router();

router.get('/',  (req, res) => {
  try {
    const parameters = Parameter.get();
    res.status(200).json(parameters);
  } catch (err) {
    manageAllErrors(res, err);
  }
});

router.get('/:parameterId', (req, res) => {
  try {
    const parameter = Parameter.getById(req.params.parameterId)
    res.status(200).json(parameter)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
    try {
        const parameter = Parameter.create({ ...req.body });
        res.status(201).json(parameter);
    } catch (err) {
        manageAllErrors(res, err);
    }
});

router.delete('/:parameterId', (req, res) => {
    try {
        Parameter.delete(req.params.parameterId);
        res.status(204).end();
    } catch (err) {
        manageAllErrors(res, err);
    }
});


router.put('/:parameterId', (req, res) => {
  try {
    res.status(200).json(Parameter.update(req.params.parameterId, req.body));
  } catch (err) {
    manageAllErrors(res, err);
  }
});


module.exports = router;

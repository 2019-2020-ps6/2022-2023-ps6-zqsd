const { Router } = require('express');
const { Parameter } = require('../../models/Parameter/parameter.model');
const manageAllErrors = require('../../utils/routes/error-management');

const router = new Router();

router.get('/',  (req, res) => {
  try {
    const parameters = Parameter.get();
    res.status(200).json(parameters);
  } catch (err) {
    manageAllErrors(res, err);
  }
});


router.put('/', (req, res) => {
  try {
    const existingParameter = Parameter.get();
    if (existingParameter) {
      // Mise à jour du paramètre existant
      const updatedParameter = Parameter.update(req.body);
      res.status(200).json(updatedParameter);
    } else {
      // Création d'un nouveau paramètre
      const newParameter = Parameter.create(req.body);
      res.status(201).json(newParameter);
    }
  } catch (err) {
    manageAllErrors(res, err);
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const models = require('../models');
const Barber = models.Barber;

/* GET Barbers listing. */
router.get('/', function(req, res, next) {
  let model = Barber.findAll();

  model.then((barbers) => {
    res.json(barbers);
  }, () => {
    res.json({error: 'Couldn\'t load barbers'});
  });
});

module.exports = router;
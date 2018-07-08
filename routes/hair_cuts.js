const express = require('express');
const router = express.Router();

const models = require('../models');
const HairCut = models.HairCut;

/* GET Barbers listing. */
router.get('/', function(req, res, next) {
  let model = HairCut.findAll();

  model.then((hairCut) => {
    res.json(hairCut);
  }, () => {
    res.json({error: 'Couldn\'t load barbers'});
  });
});

module.exports = router;
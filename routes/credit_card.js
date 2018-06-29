const express = require('express');
const router = express.Router();

const models = require('../models');
const CreditCard = models.CreditCard;

router.get('/', (req, res, next) => {
  let userId = req.user.id;

  let model = CreditCard.findAll({
    where: {
      UserId: userId
    },
    raw: true
  });

  model.then(creditCards => {
    if(!creditCards) {
      return res.json([]);
    }

    return res.json(creditCards);
  });
});

module.exports = router;

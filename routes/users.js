const express = require('express');
const router = express.Router();

const models = require('../models');
const User = models.User;

router.get('/', (req, res, next) => {
  let userId = req.user.id;
  console.log(userId);

  let model = User.findOne({
    where: {
      id: userId
    },
    attributes: {
      exclude: ['password']
    },
    raw: true
  });

  model.then(user => {
    if(!user) {
      return res.json({error: 'User not found'});
    }

    return res.json(user);
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').load();

const models = require('../models');
const User = models.User;

/*
 * POST: Authentication
 */
router.post('/', function(req, res, next) {
  let params = req.body;

  let model = User.findOne({
    where: params,
    attributes: {
      exclude: ['password']
    }
  });

  model.then((user) => {
    if (!user) {
      res.json({token: '', err: 'NO_USER_FOUND'});
      return;
    }

    let token = jwt.sign({id: user.id, username: user.username}, process.env.SECURITY_TOKEN);

    res.json({token: token});
  });

});

module.exports = router;
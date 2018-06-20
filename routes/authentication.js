var express = require('express');
var router = express.Router();

/*
 * POST: Authentication
 */
router.post('/', function(req, res, next) {
  var user = {token: 123};
  res.json(user);
});

module.exports = router;
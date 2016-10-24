var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  return res.render('index.ejs');
});

module.exports = router;

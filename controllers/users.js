var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  User.find().sort({'name': 'asc'}).exec(function(err, users) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }

    res.json(users);
  });
});

router.post('/remove', function(req, res) {
  User.remove({_id: req.body.id}, function(err) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }

    res.send(200);
  });
});

router.post('/new', function(req, res) {
  User.create(req.body, function (err, small) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }
    res.send(200);
  })
});


router.post('/update', function(req, res) {
  User.update({_id: req.body.id}, {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email
  }, function (err, small) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }
    res.send(200);
  })
});

router.get('/:id', function(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    }

    if (!user) {
      return res.status(404).end();
    }

    res.json(user);
  });
});

module.exports = router;

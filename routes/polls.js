var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var pollModel = require('../models/pollModel');
var helpers = require('../helpers');

router.get('/', function (req, res, next) {
  var getIssues = []
  pollModel.find().sort({
      upvotes: -1
  }).exec(function (err, issues) {
      for (i in issues) {
          getIssues.push(issues[i]);
      }
      res.render('polls',{
        polls:getIssues
      });
  });
});

router.get('/api/:pollid', function (req, res, next) {
  pollModel.findOne({
      _id: req.params.pollid
  }).exec(function (err, poll) {
      res.send({poll:poll})
  });
});

router.get('/getpoll/:pollid', function (req, res, next) {
  pollModel.findOne({
      _id: req.params.pollid
  }).exec(function (err, poll) {
      res.render('poll-data',{poll:poll});
  });
});

router.get('/poll1')
module.exports = router;

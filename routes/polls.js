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
          console.log(i)
          getIssues.push(issues[i]);
      }
      res.render('polls',{
        polls:getIssues
      });
  });
});

router.get('/getpoll/:pollid', function (req, res, next) {
  pollModel.findOne({
      _id: req.params.pollid
  }).exec(function (err, issue) {
      res.render('poll',{
        issue:issue
      });
  });
});
module.exports = router;

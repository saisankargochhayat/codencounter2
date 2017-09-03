var express = require('express');
var router = express.Router();
var issueModel = require('../models/issueModel');
var pollModel = require('../models/pollModel');
var helpers = require('../helpers');
router.get('/issues', function (req, res, next) {
    var getIssues = []
    issueModel.find().sort({
        upvotes: -1
    }).exec(function (err, issues) {
        for (i in issues) {
            console.log(i)
            getIssues.push(issues[i]);
        }
        res.render('gov-issues',{
          issues:getIssues
        });
    });
});
router.get('/polls', function (req, res, next) {
  var getIssues = []
  pollModel.find().sort({
      upvotes: -1
  }).exec(function (err, issues) {
      for (i in issues) {
          getIssues.push(issues[i]);
      }
      res.render('gov-polls',{
        polls:getIssues
      });
  });
});

router.get('/getissue/:issueid', function (req, res, next) {
    issueModel.findOne({
        _id: req.params.issueid
    }).exec(function (err, issue) {
        res.render('gov-issue',{
          issue:issue
        });
    });
});
router.get('/getpoll/:pollid', function (req, res, next) {
  pollModel.findOne({
      _id: req.params.pollid
  }).exec(function (err, poll) {
      res.render('poll-data',{poll:poll});
  });
});
router.get('/mark/:issueid', function (req, res, next) {
    var query = {
        _id: req.params.issueid
    };
    issueModel.findOne({
        _id: req.params.issueid
    }, function (err, doc) {
        issueModel.update(query, {
            marked_for_consideration: true
        }, function (err, doc) {
            res.send(doc);
        })
    });
});
router.post('/resolve/:issueid', function (req, res, next) {
    var query = {
        _id: req.params.issueid
    };
    issueModel.findOne({
        _id: req.params.issueid
    }, function (err, doc) {
      console.log(req.body.msg);
        issueModel.update(query, {
            resolved: {
              success: true,
              mesasge: req.body.msg
            }
        }, function (err, doc) {
            res.send(doc);
        })
    });
});
router.post('/reject/:issueid', function (req, res, next) {
    var query = {
        _id: req.params.issueid
    };
    issueModel.findOne({
        _id: req.params.issueid
    }, function (err, doc) {
      console.log(req.body.msg);
        issueModel.update(query, {
            resolved: {
              success: false,
              mesasge: req.body.msg
            }
        }, function (err, doc) {
            res.send(doc);
        })
    });
});
router.get('/dashboard',function(req,res,next) {
  res.render('gov_dashboard');
})
module.exports = router;

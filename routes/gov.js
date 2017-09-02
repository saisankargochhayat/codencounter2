var express = require('express');
var router = express.Router();
var issueModel = require('../models/issueModel');
var helpers = require('../helpers');
router.get('/', function (req, res, next) {
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
router.get('/getissue/:issueid', function (req, res, next) {
    issueModel.findOne({
        _id: req.params.issueid
    }).exec(function (err, issue) {
        res.render('gov-issue',{
          issue:issue
        });
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
        issueModel.update(query, {
            resolved: {
              success: true,
              msg: req.body.msg
            }
        }, function (err, doc) {
            res.send(doc);
        })
    });
});
module.exports = router;

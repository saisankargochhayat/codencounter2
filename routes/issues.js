var express = require('express');
var router = express.Router();
var issueModel = require('../models/issueModel');
var helpers = require('../helpers');
router.get('/', function (req, res, next) {
    var getIssues = []
    // issueModel.find({}, function (err, issues) {
    //     for (i in issues) {
    //         console.log(i)
    //         getIssues.push(issues[i]);
    //     }
    //     res.send(getIssues);
    // });
    issueModel.find().sort({
        upvotes: -1
    }).exec(function (err, issues) {
        for (i in issues) {
            console.log(i)
            getIssues.push(issues[i]);
        }
        res.send(getIssues);
    });

});
router.get('/getissue/:issueid', function (req, res, next) {
    issueModel.find({
        _id: req.params.issueid
    }).exec(function (err, issues) {
        res.send(issues);
    });
});
router.get('/upvote/:issueid', function (req, res, next) {
    var query = {
        _id: req.params.issueid
    };
    issueModel.findOne({
        _id: req.params.issueid
    }, function (err, doc) {
        var currupvotes = doc.upvotes + 1
        issueModel.update(query, {
            upvotes: currupvotes 
        }, function (err, doc) {
            res.send({votes:currupvotes});
        })
    });
});
router.get('/downvote/:issueid', function (req, res, next) {
    var query = {
        _id: req.params.issueid
    };
    issueModel.findOne({
        _id: req.params.issueid
    }, function (err, doc) {
        var currupvotes = doc.upvotes -1
        issueModel.update(query, {
            upvotes: currupvotes 
        }, function (err, doc) {
            res.send({votes:currupvotes});
        })
    });

});
module.exports = router;
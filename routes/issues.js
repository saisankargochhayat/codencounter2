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
        res.render('issues',{
          issues:getIssues
        });
    });

});
router.get('/getissue/:issueid', function (req, res, next) {
    issueModel.findOne({
        _id: req.params.issueid
    }).exec(function (err, issue) {
        res.render('issue',{
          issue:issue
        });
    });
});
module.exports = router;

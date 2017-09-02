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
    issueModel.find().sort({ upvotes: -1 }).exec(function (err, issues) {
        for (i in issues) {
            console.log(i)
            getIssues.push(issues[i]);
        }
        res.send(getIssues);
    });

});
module.exports = router;
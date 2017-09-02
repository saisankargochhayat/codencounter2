var express = require('express');
var router = express.Router();
var issueModel = require('../models/issueModel');
var helpers = require('../helpers');
<<<<<<< HEAD
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
=======


router.get('/', function(req, res , next) {
    var getIssues = []
      issueModel.find({}, function(err, issues) {
        for (i in issues)
            {console.log(i)
              getIssues.push(issues[i]);
            }
              res.send(getIssues);
       });

  });
router.get('/getissue/:issueid',function(req,res,next) {
  res.render('issue');
});
module.exports = router;
>>>>>>> 4644eea2181c0279c09cc9c659c1e044c53fcbca

var express = require('express');
var router = express.Router();
var issueModel = require('../models/issueModel');
var helpers = require('../helpers');
router.get('/', function(req, res , next) {
    var getIssues = []
      issueModel.find({},{sort:{upvotes: 1}}, function(err, issues) {
        for (i in issues)
            {console.log(i)
              getIssues.push(polls[i]);
            }
              res.send(getIssues); 
       });
    
  });
module.exports = router;

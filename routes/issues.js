var express = require('express');
var router = express.Router();
var issueModel = require('../models/issueModel');
var helpers = require('../helpers');
router.get('/', function(req, res , next) {
    var getPolls ={}
      issueModel.find({}, function(err, issues) {
      for (i in polls)
        {console.log(polls[i].options);}
        //   var allPolls = {};
    
      //   polls.forEach(function(user) {
      //     allPolls[name] = user;
      //   });
    
      //   res.send(userMap);  
       });
    
  });
  module.exports = router;
module.exports = router;

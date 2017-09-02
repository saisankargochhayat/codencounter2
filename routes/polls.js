var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var pollModel = require('../models/pollModel');
var helpers = require('../helpers');

router.get('/', function(req, res , next) {
  var getPolls ={}
    pollModel.find({}, function(err, polls) {
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

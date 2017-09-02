var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var helpers = require('../helpers');

router.get('/',function(req,res,next) {
  res.render('issues');
});

router.get('/getissue/:issueid',function(req,res,next) {
  res.render('issue');
});
module.exports = router;

var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var helpers = require('../helpers');

router.get('/',helpers.is_authenticated,function(req,res,next) {
  User
})
module.exports = router;
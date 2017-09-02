var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var helpers = require('../helpers');
/* GET users listing. */
router.get('/', helpers.is_authenticated,function(req, res, next) {
  res.send('TODO');
});

router.get('/signin',function(req,res,next) {
  res.redirect('/signin.html');
});

router.get('/signup',function(req,res,next) {
  res.redirect('/signup.html');
});

router.post('/signup',function(req,res,next) {
  console.log(req.body);
  var user = new UserModel({
    email : req.body.email,
    password : req.body.password,
    aadhar : req.body.aadhar,
    city : req.body.residence_city,
    resident_location : {
      lat : req.body.residence_lat,
      long : req.body.residence_lon
    }
  });
  user.save(function(err,newUser) {
    if(err) {
      console.log(err);
      res.send(err);
    }else {
      req.session.user = newUser;
      res.send("successfully signed up");
    }
  });
});

router.post('/signin',function(req,res,next) {
  UserModel.findOne({email : req.body.email , password : req.body.password},function(err,user) {
    if(err){
      console.log(err);
      res.send(err)
    }else {
      if(user) {
        req.session.user = user;
        res.send("successfully logged in.")
      }else {
        res.send("Wrong credentials.")
      }
    }
  });
});

router.get('/signout',function(req,res,next) {
  req.session.user = null;
  res.send("successfully logged out");
})

module.exports = router;

var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel');
var helpers = require('../helpers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('TODO');
});

router.get('/signin',function(req,res,next) {
  res.redirect('/signin.html');
});

router.get('/signup',function(req,res,next) {
  res.redirect('/signup.html');
});

router.post('/signup',function(req,res,next) {
  // res.redirect('/users/signin.html')
  var user = new userModel({
    email : req.body.email,
    password : req.body.password,
    aadhar : req.body.aadhar,
    city : req.body.city,
    residence_lat : residence_lat,
    residence_lon : residence_lon
  });
  user.save(function(err,newUser) {
    if(err) {
      console.log(err);
      res.send(err);
    }else {
      console.log(newUser);
      req.session.user = newUser;
      console.log(req.session);
    }
  });
});

router.post('/signin',function(req,res,next) {
  userModel.findOne({email : req.body.email , password : req.body.password},function(err,user) {
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

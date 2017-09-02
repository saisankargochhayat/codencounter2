var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signin',function(req,res,next) {
  res.redirect('/signin.html');
});

router.get('/signup',function(req,res,next) {
  res.redirect('/signup.html');
});

router.post('/signup',function(req,res,next) {
  // res.redirect('/users/signin.html')
  console.log('');
});

module.exports = router;

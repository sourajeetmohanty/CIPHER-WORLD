var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET crypto page*/
router.get('/ceaser', function(req, res, next) {
  res.render('ceaser');
})
/* GET crypto page*/
router.get('/vigenere', function(req, res, next) {
  res.render('vigenere');
})
/* GET crypto page*/
router.get('/vernam', function(req, res, next) {
  res.render('vernam');
})
/* GET crypto page*/
router.get('/xor', function(req, res, next) {
  res.render('xor');
})

module.exports = router;

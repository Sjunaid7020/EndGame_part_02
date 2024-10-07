var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/failed', function(req, res) {
  req.flash("age", 25)
  req.flash("name", 'ABC ')
  res.send("its done")
});

router.get('/check', function(req, res) {
  console.log(req.flash("age" ))
  console.log(req.flash("name" ))
  res.send('check console')
});


module.exports = router;

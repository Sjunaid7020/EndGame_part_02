var express = require('express');
var router = express.Router();

const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', async function(req, res){
 let userdata = await userModel.create({
     username:'Jon',
     nickname:'J',
     description:'Developer',
     categories:['js','React','node'],

 })
    res.send(userdata)
});

module.exports = router;

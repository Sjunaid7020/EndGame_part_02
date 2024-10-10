var express = require('express');
var router = express.Router();

const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', async function(req, res){
 let userdata = await userModel.create({
     username:'keven',
     nickname:'hummer',
     description:'Bike Rider with cool hair',
     categories:['Bike','Road','hair'],

 })
    res.send(userdata)
});

router.get('/find', async function(req, res, ) {
    var regex = new RegExp('Jon', 'i')
    let user = await userModel.find({username: regex})
    res.send(user);
  });


module.exports = router;

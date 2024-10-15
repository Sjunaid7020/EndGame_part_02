var express = require('express');
var router = express.Router();

const userModel = require('./users')
const passport = require('passport-local')

passport.user(new localStrategy(userModel.authenticate()))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/profile', function(req, res, next) {
    res.send('wellcome to profile');
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
    let user = await userModel.find({
        $expr:{$and:[
            {$gte: [{$strLenCP:'$nickname'},0] },
            {$lte:[{$strLenCP:'$nickname'},12]}
                ]}
    })
    res.send(user);
  });

router.post('/login', passport.authenticate("local",{
        successRedirect:"/profile",
        failureRedirect:'/'
    }), function(req, res, next) {
    res.render('index');
  });

userModel.register(userdata, req.body.password)
    .then(function (registereduser){
        passport.authenticate("local")(req, res, function (){
            res.redirect('/profile')
        })
    })

module.exports = router;

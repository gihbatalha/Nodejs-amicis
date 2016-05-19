var express = require('express');
var router = express.Router();
var User   = require('../app/models/user.js');
var Login   = require('../app/models/login.js');

/* GET users listing. */
router.get('/', function(req, res) {
  User.find({},function(err, users){
  	console.log("Results", users);
    res.json(users);
  });
});

router.post('/', function(req, res) {
    var newUser = new User(req.body);
  newUser.save(function (err, result){
    res.send(result);
    console.log(err);
  });
});

router.post('/login', function(req, res) {
   
  var newLogin = new Login(req.body);

  newLogin.find(req.body, function (err, logins) {
  	res.send("erro:"+err + " logins:"+logins);

  	if(logins != null){
        console.log("Success!");
        res.redirect('/teste.ejs');
    }
    else
    {
    	
        console.log("Error!");
    }

  });

});

module.exports = router;

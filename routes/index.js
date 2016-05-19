var express = require('express');
var router = express.Router();
var Login   = require('../app/models/login.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

var express = require('express');
var router  = express.Router();
var User    = require('../app/models/user.js');

router.get('/logged', function(req, res) {
	res.json(req.session.user); //variável de sessão
});

router.get('/logout', function(req, res) {
  req.session.destroy();

  res.send({status:200,message:'Sucesso!'});
});

router.post('/login', function(req, res) {
  var dados = req.body;

  User.find({login: dados.login, senha: dados.senha}, function (err, logins) {  	

  	if(logins != null && logins.length > 0){
        console.log("Success!");
        req.session.logged = true;
        req.session.user = logins[0];
        res.send({status:200,message:'Success!'});
    }
    else
    {   	
        console.log("Error!");
        res.send({status:500,message:'Erro!'});
    }

  
  });
});

module.exports = router;
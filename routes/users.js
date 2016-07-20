var express = require('express');
var router = express.Router();
var User   = require('../app/models/user.js');

/* GET users listing. */
router.get('/', function(req, res) {
  User.find({},function(err, users){
  	console.log("Results", users);
    res.json(users);
  });
});

router.post('/', function(req, res) {
    var newUser = new User(req.body);
      console.log("New User: ",newUser);
      console.log("Lalalala");
      newUser.save(function (err, result){
      res.send(result);
      console.log("post User - result:",result);
      console.log("post User - err:",err);
  });
});

module.exports = router;

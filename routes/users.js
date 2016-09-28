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

/* GET users listing. */
router.get('/:id', function(request, res) {
  console.log("Get user com parametro - passado o id:", request.params.id);
  User.findOne({'_id':request.params.id},function(err, users){
    console.log("User com o id (", request.params.id, ") : ", users);
    res.json(users);
  });
});


/*
app.get('/v1/users/:username', function(request, response, next) {
  var username = request.params.username;
  findUserByUsername(username, function(error, user) {
    if (error) return next(error);
    return response.render('user', user);
  });
});

*/



//Character.findOne({ name: 'Sam' }, function(err, character) {

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

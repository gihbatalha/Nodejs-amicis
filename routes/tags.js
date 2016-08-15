<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var Tag   = require('../app/models/tag.js');

/* GET users listing. */
router.get('/', function(req, res) {
  Tag.find({},function(err, tags){
  	console.log("Results", tags);
    res.json(tags);
  });
});

router.post('/', function(req, res) {
    var newTag = new Tag(req.body);
      console.log("New Tag: ", newTag);
      newTag.save(function (err, result){
      res.send(result);
      console.log("post Tag - result:", result);
      console.log("post Tag - err:", err);
  });
});

=======
var express = require('express');
var router = express.Router();
var Tag   = require('../app/models/tag.js');

/* GET users listing. */
router.get('/', function(req, res) {
  Tag.find({},function(err, tags){
  	console.log("Results", tags);
    res.json(tags);
  });
});

router.post('/', function(req, res) {
     var newTag = new Tag(req.body);
      console.log("New Tag: ", newTag);
      newTag.save(function (err, result){
      res.send(result);
      console.log("post Tag - result:", result);
      console.log("post Tag - err:", err);
  });
});

>>>>>>> 436ddb90a072701425223ba7b4e730fc3844760b
module.exports = router;
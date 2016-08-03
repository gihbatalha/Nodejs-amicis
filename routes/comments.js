var express = require('express');
var router = express.Router();
var Comment   = require('../app/models/comment.js');

/* GET users listing. */
router.get('/', function(req, res) {
  Comment.find({},function(err, comments){
  	console.log("Results", comments);
    res.json(comments);
  });
});

router.post('/', function(req, res) {
    var newComment = new Comment(req.body);
      console.log("New Comment: ", newComment);
      newComment.save(function (err, result){
      res.send(result);
      console.log("post Comment - result:", result);
      console.log("post Comment - err:", err);
  });
});

module.exports = router;
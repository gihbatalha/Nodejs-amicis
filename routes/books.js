var express = require('express');
var router = express.Router();
var Book  = require('../app/models/book.js');

/* GET users listing. */
router.get('/', function(req, res) {
  Book.find({},function(err, books){
    console.log("Results", books);
    res.json(books);
  });
});  


router.post('/', function(req, res) {
      var newBook = new Book(req.body);
      console.log("New Book: ", newBook);
      
      newBook.save(function (err, result){
      res.send(result);
      console.log("post Book - result:",result);
      console.log("post Book - err:", err);
  });
});

module.exports = router;

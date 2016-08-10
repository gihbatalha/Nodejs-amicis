var express = require('express');
var router = express.Router();
var Category  = require('../app/models/category.js');

/* GET users listing. */
router.get('/', function(req, res) {
  Category.find({},function(err, categorys){
  	console.log("Results", categorys);
    res.json(categorys);
  });
});

router.post('/', function(req, res) {
     var newCategory = new Category(req.body);
      console.log("New Category: ", newCategory);
      newCategory.save(function (err, result){
      res.send(result);
      console.log("post Category - result:", result);
      console.log("post Category - err:", err);
  });
});

module.exports = router;
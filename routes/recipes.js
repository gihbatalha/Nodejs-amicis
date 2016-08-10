var express = require('express');
var router = express.Router();
var Recipe  = require('../app/models/recipe.js');

/* GET users listing. */
router.get('/', function(req, res) {
  Receita.find({},function(err, receitas){
  	console.log("Results", receitas);
    res.json(receitas);
  });
});

router.post('/', function(req, res) {
      var newRecipe = new Recipe(req.body);
      console.log("New Recipe: ",newRecipe);
      
      newRecipe.save(function (err, result){
      res.send(result);
      console.log("post Recipe - result:",result);
      console.log("post Recipe - err:",err);
  });
});

module.exports = router;
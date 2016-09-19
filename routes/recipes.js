var express = require('express');
var router = express.Router();
var Recipe  = require('../app/models/recipe.js');

/* GET users listing. */
router.get('/', function(req, res) {
  Recipe.find({},function(err, recipes){
    console.log("Results", recipes);
    res.json(recipes);
  });
});  

/*router.get('/:category', function(req, res) {
  console.log("Get recipe com parametro - passado a category: ", req.params.category);

  Recipe.find({'categorias':req.params.category},function(err, recipes){
    console.log("User com a category (", req.params.id, ") : ", recipes);
    res.json(recipes);
  });

});*/

router.get('/:valueParam/:qualParam', function(req, res) {
  var varQualParam = req.params.qualParam ;

  console.log(varQualParam);

  if(varQualParam == 'categorias'){
    console.log("get categorias");
    Recipe.find({ 'categorias' : req.params.valueParam},function(err, recipes){
      res.json(recipes);
    });
  }//end if

  if(varQualParam == 'tags'){
    console.log("get tags");
    Recipe.find({ 'tags' : req.params.valueParam},function(err, recipes){
      res.json(recipes);
    });
  }//end if

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


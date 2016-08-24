var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
	nome: String,
	modoPreparo: String,
  	tempoPreparo: String, // ????
    ingredientes: [String],
  	rendimento: String,
  	situacao: String, // se está aprovada/pendente/recusada para ser exibida no site.
    tags: [String],
    categorias: [String],
    autor : String
});



//fotos das receitas
/*  avaliacao : { type: Number, min: 0, max:5 }, */
  /*	comentarios: [String],
  	duvidas: [String],*/

module.exports = mongoose.model('Recipe', recipeSchema);
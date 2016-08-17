var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
	nome: String,
	modoPreparo: String,
  	tempoPreparo: String, // ????
  	rendimento: String,
  	situacao: String // se está aprovada/pendente/recusada para ser exibida no site.
});



//fotos das receitas
/*  avaliacao : { type: Number, min: 0, max:5 }, */
  /*	comentarios: [String],
  	duvidas: [String],
  	tags: [String],
  	categorias: [String],*/
  	 /* ingredientes: [String],*/

module.exports = mongoose.model('Recipe', recipeSchema);
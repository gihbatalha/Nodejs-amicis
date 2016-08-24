var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({     //recipesBook
  	cozinheiro: String,
  	receitas: [String] // se está aprovada/pendente/recusada para ser exibida no site.
});

module.exports = mongoose.model('Book', bookSchema);
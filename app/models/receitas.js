var mongoose = require('mongoose');

var receitaSchema = new mongoose.Schema({
	nome: String,
	modoPreparo: String,
  	tempoPreparo: String, // ????
  	ingredientes: [String],
  	tags: [String]
});

module.exports = mongoose.model('receita', receitaSchema);
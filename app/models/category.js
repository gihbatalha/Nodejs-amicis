var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
  	nome: String,
  	situacao: String // se está aprovada/pendente/recusada para ser exibida no site.
});

module.exports = mongoose.model('Category', categorySchema);
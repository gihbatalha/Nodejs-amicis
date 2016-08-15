<<<<<<< HEAD
var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
  	nome: String,
  	situacao: String // se está aprovada/pendente/recusada para ser exibida no site.
});

module.exports = mongoose.model('Tag', tagSchema);
=======
var mongoose = require('mongoose');

var tagSchema = new mongoose.Schema({
  	nome: String,
  	situacao: String // se está aprovada/pendente/recusada para ser exibida no site.
});

module.exports = mongoose.model('Tag', tagSchema);
>>>>>>> 436ddb90a072701425223ba7b4e730fc3844760b

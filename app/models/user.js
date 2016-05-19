var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	nome: String,
	dataNascimento: Date,
  	email: String,
  	sexo: String,
  	login: String,
  	senha: String
});

module.exports = mongoose.model('User', userSchema);

var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
  	login: String,
  	senha: String
});

module.exports = mongoose.model('Login', loginSchema);

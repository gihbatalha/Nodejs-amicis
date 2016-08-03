var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	usuario   : String, //id do usuário
	dataHora  : Date,
	texto     : String
	//respostas : [commentSchema]
});


module.exports = mongoose.model('Comment', commentSchema);
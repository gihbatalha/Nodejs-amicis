function lavarRoupa(callback){
	console.log("Lavando roupa...");
	setTimeout(function(){
		console.log("Lavagem finalizada");
		callback();
	}, 3000); //delay

}

function darComidaParaCachorro(){
	console.log("Alimentando o cachorro...");
}

function passearComCachorro(){
	console.log("Passeando com o cachorro...");
}

function estenderRoupa(){
	console.log("Estendendo a roupa...");
}

lavarRoupa(function(){
	estenderRoupa();
});
darComidaParaCachorro();
passearComCachorro();
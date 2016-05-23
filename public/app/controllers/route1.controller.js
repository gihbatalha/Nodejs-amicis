angular.module('app')
	.controller('route1Controller', function($scope, $http){
		console.log('Iniciando route1...');

		$scope.checkLogged = function(){
			console.log("Consultando usuário...");
			$http.get('/auth/logged').success(function(response){
				console.log(response);

				if(response != ""){
					if(response !== undefined || response !== null){
						console.log(response);
						$scope.user = response;

					}
				}

			});
		};

		$scope.checkLogged();
	});
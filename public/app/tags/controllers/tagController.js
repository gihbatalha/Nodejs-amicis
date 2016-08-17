angular.module('app')
	.controller('tagController', function($scope, $http){
		console.log('Iniciando tagController...');

			$http.get('/tags').success(function(response){
				console.log('Retornou as tags: ', response);
				$scope.itens = response;
			}); 

		$scope.add= function(){
			console.log('Adicionando nova tag...');

			$scope.novaTag.situacao = "pendente";

			console.log("Tag sendo add: ", $scope.novaTag);
						
			$http.post('/tags', $scope.novaTag).success(function(response){
				console.log(response);
				$state.go('route1'); //após add coom sucesso, direciona pra route1
			}); 


		};

	});
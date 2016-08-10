angular.module('app')
	.controller('categoryController', function($scope, $http){
		console.log('Iniciando CategoryController...');

		$scope.add= function(){
			console.log('Adicionando nova tag...');

			$scope.novaCategoria.situacao = "pendente";

			console.log("Categoria sendo add: ", $scope.novaCategoria);
						
			$http.post('/category', $scope.novaCategoria).success(function(response){
				console.log(response);
				$state.go('route1'); //após add coom sucesso, direciona pra route1
			}); 


		};

	});
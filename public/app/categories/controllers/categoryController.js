angular.module('app')
	.controller('categoryController', function($scope, $http, $state){
		console.log('Iniciando CategoryController...');

		$http.get('/category').success(function(response){
				console.log("Retornou as categorias: ", response);
				$scope.itens = response;
			});

		$scope.add= function(){
			console.log('Adicionando nova tag...');

			$scope.novaCategoria.situacao = "pendente";

			console.log("Categoria sendo add: ", $scope.novaCategoria);
						
			$http.post('/category', $scope.novaCategoria).success(function(response){
				console.log(response);
				$state.go('route1'); //após add coom sucesso, direciona pra route1
			}); 


		};

		$scope.title="Categorias";

		$http.get('/category').success(function(response){
				console.log("Categorias: ", response);
				$scope.itens = response;
				$state.go('route1'); //após add coom sucesso, direciona pra route1
		});

	});
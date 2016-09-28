angular.module('app')
	.controller('recipeController', function($scope, $http, $state){
		console.log('Iniciando recipeController...');

		$scope.add= function(){
			console.log('Adicionando nova receita...');
			$scope.novaReceita.situacao = "pendente";
			$scope.novaReceita.autor = $scope.userLogged;
			
			console.log('Receita sendo add: ', $scope.novaReceita);
			

			$http.post('/recipes', $scope.novaReceita).success(function(response){
				console.log(response);
				$state.go('route1'); //após add coom sucesso, direciona pra route1
			});


		};

	});
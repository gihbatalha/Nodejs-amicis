angular.module('app')
	.controller('recipeController', function($scope, $http, $state){
		console.log('INICIANDO RECIPE CONTROLLER...');

		$scope.add= function(){
			console.log('Adicionando nova receita...');
			$scope.novaReceita.situacao = "pendente";
			$scope.novaReceita.autor = $scope.userLogged;
			$scope.novaReceita.ingredientes = $scope.novaReceita.ingredientes.split(',');
			
			console.log('Receita sendo add: ', $scope.novaReceita);			

			$http.post('/recipes', $scope.novaReceita).success(function(response){
				console.log(response);
				$state.go('home'); //após add coom sucesso, direciona pra route1
			});


		};

	});
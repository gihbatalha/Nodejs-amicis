angular.module('app')
	.controller('recipeManagerController', function($scope, $http){
		console.log('Iniciando recipeManagerController...');

			  $scope.title = "Receitas";
			  $scope.attribute = "nome"; //qual o atributo que será exibido

			$http.get('/recipes').success(function(response){
				console.log("get Recipes: ", response);

				$scope.itens = response;

				console.log($scope.itens[0]);
			});


		

	});
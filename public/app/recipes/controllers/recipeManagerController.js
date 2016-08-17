angular.module('app')
	.controller('recipeManagerController', function($scope, $http){
		console.log('Iniciando recipeManagerController...');

			  $scope.title = "Receitas";
			  $scope.attribute = "nome"; //qual o atributo que será exibido

			  console.log("Lalalala");

			  $http.get('/recipes').success(function(response){
			  		console.log("getRecipe:" ,response);
			  		$scope.itens = response;
			   });

	});
angular.module('app')
	.controller('recipeManagerController', function($scope, $http){
		console.log('Iniciando recipeManagerController...');

			  $scope.title = "Receitas";
			  $scope.attribute = "nome"; //qual o atributo que será exibido

			  $http.get('/recipes').success(function(response){
			  	
			  		console.log("getRecipe:" , response);
			  		$scope.itens = response;
			   });

			  /*$http.get('/users', {  {params: {_id: '1'}} ).success(function(response){
			  		console.log("Resposta:", response);
			  		//$scope.itens = response;
			   });
*/
			 // $http.get('/users', {params:{"id": , "param2": val2}})

	});
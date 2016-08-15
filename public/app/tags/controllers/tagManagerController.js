angular.module('app')
	.controller('tagManagerController', function($scope, $http){
		console.log('Iniciando tagManagerController...');

			  $scope.title = "Tags";
			  $scope.attribute = "nome"; //qual o atributo que será exibido

			$http.get('/tags').success(function(response){
				console.log("get Tags: ", response);

				$scope.itens = response;

				console.log($scope.itens[0]);
			});


		

	});
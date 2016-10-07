angular.module('app')
	.controller('detailsController', function($scope, $http, $state){
		console.log('Iniciando detailsController...');

				$scope.detailsOf = function(id){
			  		console.log("Entrou no detailsOf");
			  		console.log("id: ", id);

			  		$http.get('/recipes/'+ id +'/id').success(function(response){
			  			console.log("Resposta detailsOf: ",response);
			  			$scope.details = response[0];

			  			console.log("$scope.details", $scope.details);
			  			console.log("$scope.detaiils._id", $scope.details._id);
			  			console.log("$scope.detaiils.nome", $scope.details.nome);

			  		});


				}

	});
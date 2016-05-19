angular.module("app",[])
	.controller('UsersController', function($scope, $http){

		$scope.add = function(){
			console.log("Adicionando usuário", $scope.usuarioSendoAdicionado);
			$http.post('/users', $scope.usuarioSendoAdicionado).success(function(response){
				console.log(response);
			});
		};

	});

angular.module("app",[])
	.controller('UsersController', function($scope, $http){
		$scope.add = function(){
			console.log("Adicionando usuário", $scope.usuarioSendoAdicionado);
			$http.post('/users', $scope.usuarioSendoAdicionado).success(function(response){
				console.log(response);
			});
		};


		$scope.logar= function(){
			console.log("Logando...");
			$http.post('/login', $scopeSendoAdicionado).success(function(response){
				console.log(response);
			});
		};
		
	}); //end of controller

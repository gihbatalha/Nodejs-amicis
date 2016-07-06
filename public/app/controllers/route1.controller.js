angular.module('app')
	.controller('route1Controller', function($scope, $http){
		console.log('Iniciando route1...');

		$http.get('/users/').success(function(result){
			$scope.users = result;
			console.log("Users: ", $scope.users);
		})
		

		$scope.checkLogged = function(){
			console.log("Consultando usuário...");
			$http.get('/auth/logged').success(function(response){
				console.log(response);

				if(response != ""){
					if(response !== undefined || response !== null){
						console.log("Route 1, response: ", response);
						$scope.login = true;
						$scope.user = response;

					}
				}else{
					$scope.login = false;
				}


			});
		};

		$scope.checkLogged();
	});
angular.module("app",['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		console.log($stateProvider, $urlRouterProvider);
		$urlRouterProvider.otherwise('/route1'); //qdo não achar nenhuma rota/default
		$stateProvider
			.state('route1',{url:'/route1', templateUrl:'/app/testes/templates/route1.html', controller:'route1Controller'})
			.state('route2',{url:'/route2', templateUrl:'/app/testes/templates/route2.html', controller:'UsersController'})
			.state('login',{url:'/login', templateUrl:'/app/auth/login.html', controller:'UsersController'});

	})	
	.controller('UsersController', function($scope,$http, $state){
		console.log("Iniciando");

		$scope.add = function(){
			console.log("Adicionando usuário", $scope.usuarioSendoAdicionado);
			$http.post('/users', $scope.usuarioSendoAdicionado).success(function(response){
				console.log(response);
				$state.go('route1'); //após add coom sucesso, direciona pra route1
			});
		};


		$scope.logar= function(){
			console.log("Logando...");
			$http.post('/auth/login', $scope.usuarioLogando).success(function(response){
				console.log(response);

				if(response.status == 200){ 
					$state.go('route1'); //após logar com sucesso, direciona pra route1
				}else{
					//ou rota de erro
					alert('Login falhou');
				}
			});
		};
		
	}); //end of controller

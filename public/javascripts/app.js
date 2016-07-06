angular.module("app",['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		console.log($stateProvider, $urlRouterProvider);
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('route1',{url:'/route1', templateUrl:'/app/templates/route1.html', controller:'UsersController'})
			.state('login',{url:'/login', templateUrl:'/app/auth/templates/login.html', controller:'loginController'});

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
		
	});	//end of controller

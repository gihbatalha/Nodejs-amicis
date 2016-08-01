angular.module("app",['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		console.log($stateProvider, $urlRouterProvider);
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('route1',{url:'/route1', templateUrl:'/app/templates/route1.html', controller:'UsersController'})
			.state('newUser', {url:'/newUser', templateUrl:'/app/users/templates/newUser.html', controller:'UsersController'})
			.state('newRecipe', {url:'/newRecipe', templateUrl:'/app/recipes/templates/newRecipe.html', controller:'recipeController'})
			.state('login',{url:'/login', templateUrl:'/app/auth/templates/login.html', controller:'loginController'});

	})
	.controller('UsersController', function($scope,$http, $state){
		console.log("Iniciando");

		$scope.usuarioSendoAdicionado.sexo = null;

		$scope.add = function(){
			console.log("Adicionando usuário", $scope.usuarioSendoAdicionado);
			$http.post('/users', $scope.usuarioSendoAdicionado).success(function(response){
				console.log(response);
				$state.go('route1'); //após add coom sucesso, direciona pra route1
			});
		};

		$scope.colocarSexo = function(qualSexo){
			console.log("qual sexo: "+qualSexo);
			//$scope.usuarioSendoAdicionado.sexo = qualSexo;
			//console.log("O sexo é: "+ $scope.usuarioSendoAdicionado.sexo);

		}
		
	});	//end of controller



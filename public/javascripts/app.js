angular.module("app",['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		console.log($stateProvider, $urlRouterProvider);
		$urlRouterProvider.otherwise('/');
		$stateProvider
			/*.state('route1',{url:'/route1', templateUrl:'/app/templates/route1.html', controller:'UsersController'})*/
			.state('newUser', {url:'/newUser', templateUrl:'/app/users/templates/newUser.html', controller:'UsersController'})
			.state('newRecipe', {url:'/newRecipe', templateUrl:'/app/recipes/templates/newRecipe.html', controller:'recipeController'})
			/*.state('newComment', {url:'/newComment', templateUrl:'/app/comments/templates/newComment.html', controller:'commentController'})*/
			/*.state('newTag', {url:'/newTag', templateUrl:'/app/tags/templates/newTag.html', controller:'tagController'})
			.state('newCategory', {url:'/newCategory', templateUrl:'/app/categories/templates/newCategory.html', controller:'categoryController'})*/
			.state('login',{url:'/login', templateUrl:'/app/auth/templates/login.html', controller:'loginController'})
			/*.state('viewTags',{url:'/tags', templateUrl:'/app/general/list.html', controller:'tagManagerController'})*/
			.state('viewRecipes',{url:'/recipes', templateUrl:'/app/general/list.html', controller:'recipeManagerController'})
			/*.state('viewCategories',{url:'/categories', templateUrl:'/app/general/list.html', controller:'categoryController'})*/

			.state('viewRecipesByParam',{url:'/:valueParam?param', templateUrl:'/app/general/list.html', controller:'recipeManagerController'});

	})
	
	.controller('UsersController', function($scope,$http, $state){
		console.log("Iniciando");
		$scope.sexo = "";

		$scope.add = function(){
			console.log("Adicionando usuário", $scope.usuarioSendoAdicionado);
			$scope.usuarioSendoAdicionado.sexo = $scope.sexo;
			$http.post('/users', $scope.usuarioSendoAdicionado).success(function(response){
				console.log(response);
				$state.go('route1'); //após add coom sucesso, direciona pra route1
			});
		};

		$scope.colocarSexo = function(qualSexo){
			console.log("qual sexo: "+qualSexo);
			$scope.sexo = qualSexo;
			console.log("O sexo é: "+ $scope.sexo);

		}
		
	});	//end of controller



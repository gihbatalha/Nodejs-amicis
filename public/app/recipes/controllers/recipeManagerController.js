angular.module('app')
	.controller('recipeManagerController', function($scope, $http, $stateParams){
		console.log('Iniciando recipeManagerController...');

			  console.log("$state.param: ", $stateParams.param);
			  console.log("$state.valueParam: ", $stateParams.valueParam);

			  $scope.param = $stateParams.param;
			  $scope.valueParam = $stateParams.valueParam;

			  console.log("$scope.param: ", $scope.param);
			  console.log("$scope.valueParam: ", $scope.valueParam);

			  $scope.autorRecipe = "";
			  $scope.title = $scope.valueParam;
			  $scope.attribute = "nome"; //qual o atributo que será exibido


			   /*if($scope.param == 'viewRecipes'){ //ver todas as receitas
				   	$http.get('/recipes').success(function(response){
				  	
				  		console.log("getRecipe:" , response);
				  		$scope.itens = response;
				    });

			   }*/  //ARRUMAR

			   $http.get('/recipes/'+$scope.valueParam +'/'+$scope.param).success(function(response){
			  		console.log("Resposta:", response);
			  		$scope.itens = response;

			  		angular.forEach($scope.itens,function(recipe,index){
     					console.log("valorDoForEach: ", recipe.autor);
						$http.get('/users/'+ recipe.autor).success(function(user){
							$scope.autorRecipe = user.nome;

						});

					});

			    });

			  $scope.getRecipesByCategory= function(category){

			    $http.get('/recipes/'+ category).success(function(response){
			  		console.log("Resposta:", response);
			    });

			  } 

			  $scope.detailsOf = function(id){
			  		console.log("Entrou no detailsOf");
			  		console.log("id: ", id);

			  		$http.get('/recipes/'+ id +'/id').success(function(response){
			  			console.log("Resposta detailsOf: ",response);
			  		});
			  }
	  

	});
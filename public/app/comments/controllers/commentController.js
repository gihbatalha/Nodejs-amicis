angular.module('app')
	.controller('commentController', function($scope, $http){
		console.log('Iniciando commentController...');

		$scope.add= function(){
			console.log('Adicionando novo comentário...');
			
	

			var date = new Date();
			//$scope.novoComentario.dataHora = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
			$scope.novoComentario.dataHora = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
			$scope.checkLogged();
			$scope.novoComentario.usuario = $scope.userLogged._id;

			console.log('-----------------------------------------------------------------------------------------------------');
			console.log('Data do comentário: ', $scope.novoComentario.dataHora);
			console.log('Texto do Comentário: '+$scope.novoComentario.texto);
			console.log('Usuario do Comentário: '+$scope.novoComentario.usuario);

			console.log('Comentário sendo add: ', $scope.novoComentario);
			
			$http.post('/comments', $scope.novoComentario).success(function(response){
				console.log(response);
				$state.go('route1'); //após add coom sucesso, direciona pra route1
			}); 


		};

	});
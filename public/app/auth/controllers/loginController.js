angular.module('app')
	.controller('loginController', function($scope, $http, $state){
		console.log('Iniciando loginController...');

		$scope.logar= function(){
			console.log("Logando...");
			console.log("usuarioLogando.login:", $scope.usuarioLogando.login);
			console.log("usuarioLogando.senha:", $scope.usuarioLogando.senha);

			$http.post('/auth/login', $scope.usuarioLogando).success(function(response){
				console.log("Logar - Response: ", response);

				if(response.status == 200){ 
					$scope.login = true;
					console.log("login: ",$scope.login );	
					window.location.replace("http://localhost:3000/#/home");
					window.location.reload();
				}else{
					//ou rota de erro
					$scope.login = false;
					console.log("login: ",$scope.login );
					alert('Login falhou');
				}
			});
		};

		$scope.logarComo= function(login, senha){
			console.log("Logando...");			

			$scope.usuarioLogando = [];
			$scope.usuarioLogando.login = login;
			$scope.usuarioLogando.senha = senha;

			console.log("usuarioLogando.login:", $scope.usuarioLogando.login);
			console.log("usuarioLogando.senha:", $scope.usuarioLogando.senha);
			
			$http.post('/auth/login', $scope.usuarioLogando).success(function(response){
				console.log("Logar - Response: ", response);

				if(response.status == 200){ 
					$scope.login = true;
					console.log("login: ",$scope.login );	
					/*window.location.replace("http://localhost:3000/#/home");
					window.location.reload();*/
					$state.go("home");
				}else{
					//ou rota de erro
					$scope.login = false;
					console.log("login: ",$scope.login );
					alert('Login falhou');
				}
			});
		};

		$scope.sair = function(){
			console.log("Saindo...");
			$http.get('/auth/logout').success(function(response){
				$scope.login = false;	
			});			
		}

		$scope.checkLogged = function(){
			console.log("Consultando usuário...");
			$http.get('/auth/logged').success(function(response){
				console.log("Logged: ", response);

				if(response !== "" && response !== undefined && response !== null){
					$scope.login = true;
					$scope.userLogged = response;
					console.log("Check Logged - Login: ", $scope.login);
					console.log("Check Logged - userLogged: ", $scope.userLogged);
				}else{
					$scope.login = false;
					console.log("Check Logged - Login: ", $scope.login);

				}
			});
		};

		$scope.init = function(){		
			console.log("Init...." );	
			$scope.checkLogged();
			console.log("Init - Login: " + $scope.login );
		};



		
	});
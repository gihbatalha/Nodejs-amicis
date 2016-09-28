//Coisas úteis

angular.forEach($scope.itens,function(recipe,index){
     console.log("valorDoForEach: ", recipe._id);
		$http.get('/users/'+ recipe._id).success(function(response){
			
		});

});
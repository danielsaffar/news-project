app.controller('MainCtrl2', ['$scope', 'newsFactory', function($scope, newsFactory){

  $scope.articles = newsFactory.articles;

   $scope.getAll = newsFactory.getAll().then(function(){
    $scope.articles = newsFactory.articles;
    console.log("hi from the controller");  
  });

$scope.remove = function(index) {

  //get the specific beer id
  var articleId = newsFactory.articles[index]._id;
  
  //invoke the $http delete in factory
  newsFactory.delete(articleId).success(function(response){
    //update the view
    // $scope.beerArray.splice(index,1);
    newsFactory.getAll();
    console.log(response)
  });
          // console.log ('hey from the delete')

 }

}]);
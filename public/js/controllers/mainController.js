app.controller('MainCtrl', ['$scope', 'newsFactory', function($scope, newsFactory){

  $scope.articles = newsFactory.articles;

  $scope.newsAPI= function(){

    alert('WORK');

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "4e143ff8457a4d8dbea1701452f92ff7",
      'q': $scope.input
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
      console.log(data);
    }).fail(function(err) {
      throw err;
    })
  }





}]);
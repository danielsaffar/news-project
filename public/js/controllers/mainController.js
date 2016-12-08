app.controller('MainCtrl', ['$scope', 'newsFactory', function($scope, newsFactory){

  
  $scope.articles = newsFactory.articles;

    $scope.newsAPI = function(){

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "4e143ff8457a4d8dbea1701452f92ff7",
      'q': $scope.input
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
      $scope.query(data);
          $scope.$apply();

    }).fail(function(err) {
      throw err;
    }) 
      

  };

  $scope.query = function(data){

    $scope.articles= [];

    for(var i = 0; i < data.response.docs.length; i++){

      var article = {
        headline:data.response.docs[i].headline.main,
        link:data.response.docs[i].web_url,
        section:data.response.docs[i].section_name,
        subsection:data.response.docs[i].subsection_name,
        snippet:data.response.docs[i].lead_paragraph
      };
      $scope.articles.push(article);
    }
  }

  $scope.addToFavorite= function (index)  {

    newsFactory.create($scope.articles[index])
  }



}]);
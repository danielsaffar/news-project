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
      // console.log(data);
      $scope.query(data);

    }).fail(function(err) {
      throw err;
    })       

  };

  $scope.query = function(data){

    for(var i = 0; i < data.response.docs.length; i++){

      var article = {
        id:data.response.docs[i]._id,
        headline:data.response.docs[i].headline.main,
        // image:function(data){
        //   if(data.response.docs[i].multimedia[i].url){
        //     article.image = data.response.docs[i].multimedia[i].url;
        //   }else{
        //     article.image = "https://crbechervaise.files.wordpress.com/2015/08/the_new_york_times_logo.jpg";
        //   }
        // },
        link:data.response.docs[i].web_url,
        section:data.response.docs[i].section_name,
        subsection:data.response.docs[i].subsection_name,
        // author:data.response.docs[i].byline.contributor,
        snippet:data.response.docs[i].lead_paragraph
      };
      $scope.articles.push(article);
    }
    // console.log($scope.articles);
  }



}]);
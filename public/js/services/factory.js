app.factory('newsFactory', ['$http', function($http){

var news = {
  articles:[],
}

news.create= function (article) {
  return $http.post('/favorite' , article);
  console.log(article);
}

news.getAll=function(){
  return $http.get('/favorite').success(function (data) {
  angular.copy(data, news.articles);
  });
};

news.delete=function (id) {

    return $http.delete('/favorite/' + id)
    
  };



return news;
  }]);
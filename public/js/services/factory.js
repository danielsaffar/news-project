app.factory('newsFactory', ['$http', function($http){

var news = {
  articles:[],
}

news.create= function (article) {
  return $http.post('/favorite' , article);
  console.log(article);
}

return news;
  }]);
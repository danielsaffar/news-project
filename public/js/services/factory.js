app.factory('newsFactory', ['$http', function($http){

var news = {
  articles:[],

  query:function(data){
    // console.log(data);
    for(var i = 0; i<data.response.docs[i]; i++){
      console.log('got here');
      var article = {
        id:data.response.docs[i]._id,
        headline:response.docs[i].headline.main,
        image:response.docs[i].mulitmedia[i].url,
        link:response.docs[i].web_url,
        section:response.docs[i].section_name
      }
    this.articles.push(article);
    console.log("pushed");
    }   
    for(var i =0 ; i<this.articles.length;i++){
      console.log(this.articles[i]);
    }
  }
}

return news;
  }]);
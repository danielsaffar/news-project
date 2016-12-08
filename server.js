var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


 mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/favorite');

var Article = require("./articleModel");

var app = express();

app.use(bodyParser.json());   // This is the type of body we're interested in
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('public'));

app.use(express.static('node_modules'));

app.use(function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/favorite', function (req, res) {

  Article.find(function (error, articles) {
    res.send(articles);
  });
});

app.post('/favorite' , function (req,res,next) {

 var article = new Article(req.body) ; 

  article.save(function(err , article) {
    if(err) { return next(err);}

    res.json(article);
  });

});


app.delete('/favorite/:id', function (req, res) {

  
  res.send('DELETE request to homepage');


  Article.findByIdAndRemove(req.params.id, function(err) {
    if (err) throw err;

    // we have deleted the person
    console.log('Article deleted!');
  });

    });




app.listen(8000);
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var articleSchema=new Schema ({

  headline: {type: String},
  subsection: {type: String},
  section: {type:String},
  snippet: {type: String},
  link: {type: String}

})

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;
  

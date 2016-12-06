var express = require('express');

var app = express();

app.use(express.static('public'));

app.use('/node_modules', express.static('node_modules'));

// app.post('/beers', function (req, res) {
//   res.send('this is a post!');
// });

app.listen(8000);
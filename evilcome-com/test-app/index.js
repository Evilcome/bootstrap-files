var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose');

var app = express();

app.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/test-app');
  res.json(process.env);
});

http.createServer(app).listen(process.env.PORT || 8005, function() {
  console.log('Listening on port ' + (process.env.PORT || 8005));
});

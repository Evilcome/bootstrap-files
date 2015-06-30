var express = require('express'),
    http = require('http');

var app = express();

app.get('/', function(req, res, next) {
  res.send('This page has been viewed ' + 808 + ' times!');
});

http.createServer(app).listen(process.env.PORT || 8003, function() {
  console.log('Listening on port ' + (process.env.PORT || 8003));
});
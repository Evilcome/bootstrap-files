var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose');

var app = express();

app.get('/', function(req, res, next) {
  // mongoose.connect('mongodb://localhost/' + process.env.MONGO_NAME);
  console.log(new Date());
  res.json(process.env);
});

http.createServer(app).listen(process.env.PORT || 8005, function() {
  console.log('Listening on port ' + (process.env.PORT || 8005));
});

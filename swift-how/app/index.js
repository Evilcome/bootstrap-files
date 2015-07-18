var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/images'));

mongoose.connect('mongodb://localhost/test_database', function(err, a) {
  console.log("~~~~~~~~~~~~~~~~~~");
  console.log(err);
  console.log(a);
});

app.get('/', function(req, res, next) {
  res.send('<html><head></head><body style="text-align:center"><img src="holdon.png" /></body></html>');
});

http.createServer(app).listen(process.env.PORT || 8003, function() {
  console.log('Listening on port ' + (process.env.PORT || 8003));
});

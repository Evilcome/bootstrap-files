var express = require('express'),
    http = require('http');

var app = express();
app.use(express.static(__dirname + '/images'));

app.get('/', function(req, res, next) {
  res.send('<html><head></head><body style="text-align:center"><img src="holdon.png" /></body></html>');
});

http.createServer(app).listen(process.env.PORT || 8003, function() {
  console.log('Listening on port ' + (process.env.PORT || 8003));
});

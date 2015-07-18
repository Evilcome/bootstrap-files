var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/images'));
var mongoPath = process.env.MONGO_PORT_27017_TCP_ADDR + ":" + process.env.MONGO_PORT_27017_TCP_PORT;
mongoose.connect('mongodb://' + mongoPath + '/test_database', function(err, a) {
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

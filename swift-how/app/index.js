var express = require('express'),
    https = require('http'),
    fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/images'));

var privateKey = fs.readFileSync(process.env.SSL_KEY_PATH);
var certificate = fs.readFileSync(process.env.SSL_CRT_PATH);

app.get('/', function(req, res, next) {
  res.send('<html><head></head><body style="text-align:center"><img src="holdon.png" /></body></html>');
});

https.createServer({ key: privateKey, cert: certificate }, app).listen(process.env.PORT || 8003, function() {
  console.log('Listening on port ' + (process.env.PORT || 8003));
});

var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(req, res) {
  res.send('Hello world!');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on ' + port);
});
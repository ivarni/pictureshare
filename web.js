var app = require('express').createServer() //express.logger();
var io = require('socket.io').listen(app);

io.configure(function() {
  io.set('transports', ['xhr-polling']);
  io.set('polling duration', 10);
});

require('jade');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

io.sockets.on('connection', function(socket) {
  socket.on('message', function(data) {
    for (k in data) {
      console.log(k);
    }
    console.log('data: ' + data.file);
    io.sockets.json.send(data);
  });
});

app.get('/*.css', function(req, res) {
  res.sendfile('./public' + req.url);
});

app.get('/js/vendor*.js', function(req, res) {
  res.sendfile('./public' + req.url);
});

app.get('/js/client/:path', function(req, res) {
  res.sendfile('./lib/client/' + req.params.path);
});

app.get('/js/shared/:path', function(req, res) {
  console.log(req.params.path);
  res.sendfile('./lib/shared/' + req.params.path);
});

app.get('/', function(req, res) {
  res.render('index');
});

port = process.env.PORT || 3000

app.listen(port, function() {
  console.log('listening on ' + port);
});
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
    io.sockets.json.send({ data: data });
  });
});

app.get('/*.(js|css)', function(req, res) {
  res.sendfile('./public' + req.url);
});

app.get('/', function(req, res) {
  res.render('index');
});

port = process.env.PORT || 3000

app.listen(port, function() {
  console.log('listening on ' + port);
});
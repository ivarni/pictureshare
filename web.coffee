app = require('express').createServer() #express.logger()
io = require('socket.io').listen app

require 'jade'
app.set 'view engine', 'jade'
app.set 'view options', { layout: false }

activeClients = 0;

io.sockets.on 'connection', (socket) ->
  activeClients += 1
  io.sockets.json.send { clients: activeClients }
  socket.on 'disconnect', () ->
    activeClients -= 1
    io.sockets.json.send { clients: activeClients }

app.get '/*.(js|css)', (req, res) ->
  res.sendfile './public' + req.url

app.get '/', (req, res) ->
  res.render 'index'

port = process.env.PORT || 3000

app.listen port, ->
  console.log 'listening on ' + port
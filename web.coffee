app = require('express').createServer() #express.logger()
io = require('socket.io').listen app

io.configure () ->
  io.set 'transports', ['xhr-polling']
  io.set 'polling duration', 10

require 'jade'
app.set 'view engine', 'jade'
app.set 'view options', { layout: false }

io.sockets.on 'connection', (socket) ->
  socket.on 'message', (data) ->
    io.sockets.json.send { data: data }

app.get '/*.(js|css)', (req, res) ->
  res.sendfile './public' + req.url

app.get '/', (req, res) ->
  res.render 'index'

port = process.env.PORT || 3000

app.listen port, ->
  console.log 'listening on ' + port
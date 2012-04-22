express = require 'express'
app = express.createServer express.logger()

app.get '/', (req, res) ->
  res.send 'Hello coffee!'

port = process.env.PORT || 3000

app.listen port, ->
  console.log 'listening on ' + port
{exec}  = require 'child_process'
{print} = require 'util'

spec = () ->
  spec = exec 'node_modules/jasmine-node/bin/jasmine-node --coffee spec/'
  spec.stdout.on 'data', (data) -> print data.toString()
  spec.stderr.on 'data', (data) -> print data.toString()
  spec.on 'exit', (status) ->


task 'spec', 'Run tests', ->
  spec()
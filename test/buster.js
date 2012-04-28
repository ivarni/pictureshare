var config = module.exports;

config['Pictureshare'] = {
  rootPath    : '../',
  environment : 'browser',
  sources     : [
    'public/js/vendor/jquery-1.7.2.js',
    'public/js/vendor/underscore.js',
    'public/js/vendor/backbone.js',
    'node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js',
    'lib/**/*.js'
  ],
  tests: [
    'test/*_test.js'
  ]
}
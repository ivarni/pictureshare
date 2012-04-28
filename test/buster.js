var config = module.exports;

config['Pictureshare'] = {
  rootPath    : '../',
  environment : 'browser',
  sources     : [
    'public/js/vendor/underscore.js',
    'node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js',
    'public/js/**/*.js',
    'lib/**/*.js'
  ],
  tests: [
    'test/*_test.js'
  ]
}
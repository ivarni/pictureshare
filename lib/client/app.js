var PictureShareApp = function() {

  this.init = function() {
    var socket = io.connect();
    buster.log(socket);
    socket.on('message', function(msg) {
      msgReceived(msg);
    });


    var app = new views.AppView();
    app.render();
  }

 

}
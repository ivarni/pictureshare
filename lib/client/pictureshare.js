var PictureShareApp = function() {

  this.newFile = function() {
    console.log('huzza!');
  }

  this.init = function() {
    var socket = io.connect();

    socket.on('message', function(msg) {
      msgReceived(msg);
    });


    var app = new views.FormView({
      model: new models.FormModel()
    });
    app.render();
    $('div#content').html(app.el);
  }
}

$(document).ready(function() {
  window.app = new PictureShareApp();
  window.app.init();
});
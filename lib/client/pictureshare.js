var PictureShareApp = function() {

  this.newFile = function(data) {
    console.log('huzza!');
    this.socket.json.send({ file: data });
  }

  this.init = function() {
    this.socket = io.connect();

    this.socket.on('message', function(msg) {
      console.log(msg);
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
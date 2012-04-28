var PictureShareApp = function() {

  this.newFile = function(name, data) {
    this.socket.json.send({ file: name, data:data });
  }

  this.init = function() {
    var self = this;
    this.socket = io.connect();

    this.socket.on('message', function(msg) {
      var model = new models.FileModel();
      model.parse(msg);
      self.files.add(model);
    });

    var app = new views.FormView({
      model: new models.FileModel()
    });
    app.render();
    $('div#content').html(app.el);

    this.files = new collections.FileCollection();

    var files = new views.FilesView({
      collection: this.files
    });
    files.render();
    $('div#footer').html(files.el);
    

  }
}

$(document).ready(function() {
  window.app = new PictureShareApp();
  window.app.init();
});
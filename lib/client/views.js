var views = this.views || {};

views.FilesView = Backbone.View.extend({
  tagName: 'div',
  
  initialize: function() {
    this.collection.on('add', this.render, this);
  },
  
  render: function() {
    var ht = ''; //TODO templating
    this.collection.each(function(model) {
      ht += '<img class="thumb" src="' + model.get('bytes') + '" title="' + unescape(model.get('value')) +'" onclick="$(this).toggleClass(\'thumb\')"/>'
    });
    $(this.el).html(ht);
    return this;
  }

});

views.FormView = Backbone.View.extend({
  tagName: 'div',

  newFile: function(a,b,c) {
    var files = this.model.get('files');
    var self = this;

    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
	continue;
      }
      var reader = new FileReader();
      reader.onload = (function(myFile) {
	return function(e) {
	  window.app.newFile(self.model.get('value'), e.target.result);
	};
      })(f);
      reader.readAsDataURL(f);
    }
  },

  updateModel: function(event) {
    var files = event.target.files;
    this.model.set('files', files);
  },

  render: function() {
    $(this.el).html(_.template(this.template, {}));
  },

  events: {
    'click .save'   : 'newFile',
    'change'        : 'updateModel'
  },

  template: '<input type="file" id="files" name="files[]" multiple/><button class="save">upload</button>'
});


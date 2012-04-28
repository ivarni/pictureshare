var views = this.views || {};

views.FilesView = Backbone.View.extend({
  tagName: 'div',
  
  initialize: function() {
    this.collection.on('add', this.render, this);
  },
  
  render: function() {
    $(this.el).html(_.template(this.template,{data:this.collection}));
    return this;
  },

  template: '<% data.each(function(f) { %> \
              <img class="thumb" src="<%= f.get(\'bytes\') %>" \
                   title="<%= unescape(f.get(\'value\')) %>" \
                   onclick="$(this).toggleClass(\'thumb\')"/> <% }); %>'

});

views.FormView = Backbone.View.extend({
  tagName: 'div',

  newFile: function() {
    var files = this.model.get('files');
    var self = this;

    for (var i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
	continue;
      }
      var reader = new FileReader();
      reader.onload = (function(file) {
	return function(e) {
	  var name = file.name + ' (' + file.size + ' bytes)';
	  window.app.newFile(name, e.target.result);
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


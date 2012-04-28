var views = this.views || {};

views.FilesView = Backbone.View.extend({
  tagName: 'ul',
  
  initialize: function() {
    this.collection.on('add', this.render, this);
  },
  
  render: function() {
    var ht = ''; //TODO templating
    this.collection.each(function(model) {
      ht += '<li>' + unescape(model.get('value')) + '</li>'
    });
    $(this.el).html(ht);
    return this;
  }

});

views.FormView = Backbone.View.extend({
  tagName: 'div',

  newFile: function() {
    window.app.newFile(this.model.get('value'));
  },

  updateModel: function(event) {
    var files = event.target.files[0];
    if (files) {
      this.model.set('value', escape(files.name) + ' (' + files.type + ') - ' + files.size + ' bytes');
    }
  },

  render: function() {
    $(this.el).html(_.template(this.template, {}));
  },

  events: {
    'click .save'   : 'newFile',
    'change'        : 'updateModel'
  },

  template: '<input type="file" id="files" name="files[]" /><button class="save"/>'
});


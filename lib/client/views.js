var views = this.views || {};

views.FilesView = Backbone.View.extend({
  tagName: 'ul',
  
  initialize: function() {
    this.collection.on('add', this.render, this);
  },
  
  render: function() {
    var ht = ''; //TODO templating
    this.collection.each(function(model) {
      ht += '<li>' + model.get('value') + '</li>'
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
    this.model.set('value', event.target.value);
  },

  render: function() {
    $(this.el).html(_.template(this.template, {}));
  },

  events: {
    'click .save'   : 'newFile',
    'change'        : 'updateModel'
  },

  template: '<input /><button class="save"/>'
});


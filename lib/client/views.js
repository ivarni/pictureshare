var views = this.views || {};

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


var views = this.views || {};

views.FormView = Backbone.View.extend({
  tagName: 'div',

  newFile: function() {
    console.log(this.model.get('value'));
    window.app.newFile();
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


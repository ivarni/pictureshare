var models = this.models || {};

models.FileModel = Backbone.Model.extend({

  parse: function(data) {
    this.set('value', data.file);
  }

});
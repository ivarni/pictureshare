var models = this.models || {};

models.FileModel = Backbone.Model.extend({

  parse: function(data) {
    this.set('value', data.file);
    this.set('bytes', data.data);
  }

});
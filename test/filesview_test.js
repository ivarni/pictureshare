buster.testCase('Files View', {

  setUp: function() {
    this.view = new views.FilesView({
      collection : new collections.FileCollection()
    });
    this.view.render(); 
  },

  'when the view renders': {

    'its main element is an unordered list': function() {
      assert.tagName(this.view.el, "div");
    },

  },

  'when a new model is added to the collection': {

    'the view adds a img element to its ul': function() {
      var model = new models.FileModel({ value: 'test' });
      this.view.collection.add(model);

      expect($(this.view.el).find('img').length).toEqual(1);
    }

  }


});
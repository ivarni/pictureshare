buster.testCase('FormView', {
  setUp: function() {
    this.view = new views.FormView({
      model : new models.FileModel()
    });
    this.view.render(); 
  },

  'when the view renders': {

    'its main element is a div': function() {
      assert.tagName(this.view.el, "div");
    },

    'it renders an input box': function() {
      expect($(this.view.el).find('input').length).toEqual(1);
    },

    'it renders a submit button': function() {
      var els = $(this.view.el).find('button');
      expect(els.length).toEqual(1);
      assert.className(els[0], "save");
    }
  },

});
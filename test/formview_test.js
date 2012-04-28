buster.testCase('FormView', {
  setUp: function() {
    this.view = new views.FormView({
      model : new models.FormModel()
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

  'when the save button is clicked': {
    setUp: function() {
      window.app = { newFile: function(){} };
      this.viewStub = sinon.stub(window.app, 'newFile');
    },

    'it calls the save method on the controller': function() {
      $(this.view.el).find('button.save').trigger('click');
      expect(this.viewStub).toHaveBeenCalled();
    }

  },

  'when the value of the input box changes': {
    'it updates the model': function() {
      buster.log($(this.view.el).find('input').val('text'));      
      buster.log($(this.view.el).find('input').trigger('change'));

      assert.match(this.view.model.get('value'), 'text');
    }
  }

});
buster.testCase('Pictureshare Controller', {

    setUp: function() {
      var renderStub = { render: function(){} };
      this.renderStub = sinon.stub(renderStub, 'render');  
      this.viewStub = sinon.stub(window.views, 'FormView');
      this.viewStub.returns(renderStub);
  
      this.jsonStub = { send: function(){} };
      var onSendStub = { on: function(){}, json: this.jsonStub }
      this.sendStub = sinon.stub(this.jsonStub, 'send');
      this.socketStub = sinon.stub(io, 'connect');
      this.socketStub.returns(onSendStub);

      this.app = new PictureShareApp();
      this.app.init();
    },

    tearDown: function() {
      this.viewStub.restore();
      this.socketStub.restore();
    },

  'When the app is created' : {

    'it renders the form view': function() {
      expect(this.viewStub).toHaveBeenCalled();
      expect(this.renderStub).toHaveBeenCalled();
    },
    
    'it connects to its socket': function() {
      expect(this.socketStub).toHaveBeenCalled();
    }
  },

  'when a new file gets created': {

    'the data is sent to the server' : function() {
      this.app.newFile('data');
      expect(this.sendStub).toHaveBeenCalledWith({ file: 'data' });
    }

  }


});

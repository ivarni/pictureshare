buster.testCase('Pictureshare Controller', {

    setUp: function() {
      var renderStub = { render: function(){} };
      this.renderStub = sinon.stub(renderStub, 'render');  
      this.viewStub = sinon.stub(window.views, 'FormView');
      this.viewStub.returns(renderStub);
  
      this.jsonStub = { send: function(){} };
      var onSendStub = { on: function(){}, json: this.jsonStub }
      this.sendStub = sinon.stub(this.jsonStub, 'send');
      this.onStub = sinon.stub(onSendStub, 'on');
      this.socketStub = sinon.stub(io, 'connect');
      this.socketStub.returns(onSendStub);

      this.addStub = sinon.stub({ add: function(){} }, 'add');
      this.collectionStub = sinon.stub(window.collections, 'FileCollection');
      this.collectionStub.returns(this.addStub);

      this.filesViewStub = sinon.stub(window.views, 'FilesView');
      this.filesViewStub.returns({ render: function(){} });

      this.app = new PictureShareApp();
      this.app.init();
    },

    tearDown: function() {
      this.viewStub.restore();
      this.socketStub.restore();
      this.collectionStub.restore();
      this.filesViewStub.restore();
    },

  'When the app is created' : {

    'it renders the form view': function() {
      expect(this.viewStub).toHaveBeenCalled();
      expect(this.renderStub).toHaveBeenCalled();
    },
    
    'it connects to its socket': function() {
      expect(this.socketStub).toHaveBeenCalled();
    },

    'it creates a new collection': function() {
      expect(this.collectionStub).toHaveBeenCalled();
    }


  },

  'when a new file gets created': {

    'the data is sent to the server' : function() {
      this.app.newFile('data', 'asdadasdadasdsa');
      expect(this.sendStub).toHaveBeenCalledWith({ file: 'data', data:'asdadasdadasdsa' });
    }

  },

});

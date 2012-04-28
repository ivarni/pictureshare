buster.testCase('When the app is created', {
  setUp: function() {
    var renderStub = { render: function(){}};
    this.viewStub = sinon.stub(window.views, 'FormView');
    this.viewStub.returns(renderStub);
    this.renderStub = sinon.stub(renderStub, 'render');    
    this.socketStub = sinon.stub(io, 'connect');
    this.socketStub.returns({ on: function(){}});
    var app = new PictureShareApp();
    app.init();
  },

  tearDown: function() {
    this.viewStub.restore();
    this.socketStub.restore();
  },

  'it renders the form view': function() {
    assert(this.viewStub.called);
    assert(this.renderStub.called);
  },

  'it connects to its socket': function() {
    assert(this.socketStub.called);
  }
});

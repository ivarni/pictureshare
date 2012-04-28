buster.testCase('When the app is created', {
  'it renders the main view': function() {
    this.stub = sinon.stub(window.views, 'AppView');
    var app = new PictureShareApp();
    app.init();
    assert(this.stub.called);
  }
});
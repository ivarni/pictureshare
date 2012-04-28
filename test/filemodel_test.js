buster.testCase('File Model', {

  'when the model imports data': {
    
    'it correctly sets its value': function() {
      var model = new models.FileModel();
      model.parse({ file: 'value' });

      assert.match(model.get('value'), 'value');

    }

  }


});
'use strict';

describe('App', function () {
  var App, component;

  beforeEach(function () {
    App = require('../../../src/scripts/components/App.jsx');
    component = App();
  });

  it('should create a new instance of App', function () {
    expect(component).toBeDefined();
  });
});

'use strict';

describe('Main', function () {
  var ChefApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ChefApp = require('../../../src/scripts/components/ChefApp.jsx');
    component = ChefApp();
  });

  it('should create a new instance of ChefApp', function () {
    expect(component).toBeDefined();
  });
});

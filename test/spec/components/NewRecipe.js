'use strict';

describe('NewRecipe', function () {
  var NewRecipe, component;

  beforeEach(function () {
    NewRecipe = require('../../../src/scripts/components/NewRecipe.jsx');
    component = NewRecipe();
  });

  it('should create a new instance of NewRecipe', function () {
    expect(component).toBeDefined();
  });
});

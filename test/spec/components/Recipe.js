'use strict';

describe('Recipe', function () {
  var Recipe, component;

  beforeEach(function () {
    Recipe = require('../../../src/scripts/components/Recipe.jsx');
    component = Recipe();
  });

  it('should create a new instance of Recipe', function () {
    expect(component).toBeDefined();
  });
});

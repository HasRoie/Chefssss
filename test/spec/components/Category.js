'use strict';

describe('Category', function () {
  var Category, component;

  beforeEach(function () {
    Category = require('../../../src/scripts/components/Category.jsx');
    component = Category();
  });

  it('should create a new instance of Category', function () {
    expect(component).toBeDefined();
  });
});

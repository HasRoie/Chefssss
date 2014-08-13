'use strict';

describe('Categories', function () {
  var Categories, component;

  beforeEach(function () {
    Categories = require('../../../src/scripts/components/Categories.jsx');
    component = Categories();
  });

  it('should create a new instance of Categories', function () {
    expect(component).toBeDefined();
  });
});

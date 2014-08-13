'use strict';

describe('FrontpageListItem', function () {
  var FrontpageListItem, component;

  beforeEach(function () {
    FrontpageListItem = require('../../../src/scripts/components/FrontpageListItem.jsx');
    component = FrontpageListItem();
  });

  it('should create a new instance of FrontpageListItem', function () {
    expect(component).toBeDefined();
  });
});

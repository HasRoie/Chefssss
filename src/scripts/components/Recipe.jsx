/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Recipe.css');

var Recipe = React.createClass({
  render: function () {
    return (
        <div>
          <p>Content for Recipe</p>
        </div>
      );
  }
});

module.exports = Recipe;

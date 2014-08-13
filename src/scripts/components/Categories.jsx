/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Categories.css');

var Navbar = require('../../scripts/components/Navbar.jsx');

var Categories = React.createClass({
  render: function () {
    return (
        <div>
          <Navbar name="categories" />
          {this.props.activeRouteHandler}
        </div>
      );
  }
});

module.exports = Categories;

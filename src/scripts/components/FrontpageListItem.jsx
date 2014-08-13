/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/FrontpageListItem.css');
var Link = require('react-router/Link');
var _ = require('lodash');

var FrontpageListItem = React.createClass({
  render: function () {
    var category = this.props.content.toLowerCase();
    return (
        <div className="FrontpageListItem card">
          <Link to='category' categoryName={category}>{this.props.content}</Link>
        </div>
      );
  }
});

module.exports = FrontpageListItem;

/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/App.css');
var Link = require('react-router/Link');


var App = React.createClass({

  render: function () {

    return (
        <div className="app">
          {this.props.activeRouteHandler()}
        </div>

      );
  }
});

module.exports = App;

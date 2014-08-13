/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Navbar = require('../../scripts/components/Navbar.jsx');



var Landing = React.createClass({
  render: function() {
    var bla = this.props.activeRouteHandler;
    return (
      <div>
        Lading
      </div>
    );
  }
});




module.exports = Landing;

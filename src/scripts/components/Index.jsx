/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Landing = require('../../scripts/components/Landing.jsx');
var App = require('../../scripts/components/App.jsx');
var Categories = require('../../scripts/components/Categories.jsx');
var Category = require('../../scripts/components/Category.jsx');
var Routes = require('react-router/Routes');
var Route = require('react-router/Route');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');


var Index = React.createClass({
  render: function() {
    return (
      <Routes location="history">
        <Route handler={App}>
          <Route name="categories" path="/index.html" handler={Categories} />
          <Route name="category" path="/category/:categoryName" handler={Category} />
        </Route>
      </Routes>
    );
  }
});

React.renderComponent(<Index />, document.body);



module.exports = Index;

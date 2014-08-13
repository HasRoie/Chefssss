/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Categories.css');

var Navbar = require('../../scripts/components/Navbar.jsx');

var Categories = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    this.categories = [];
    return {categories: []};
  },
  componentWillMount: function() {
    this.categoriesRef = new Firebase("https://brilliant-fire-612.firebaseio.com/categories/");
    this.categoriesRef.limit(100).on("child_added", function(dataSnapshot) {
      this.categories.push(dataSnapshot.val());
      this.setState({
        categories: this.categories
      });
    }.bind(this));
  },
  render: function () {
    return (
        <div>
          <Navbar name="categories" categories={this.state.categories}/>
          {this.props.activeRouteHandler}
        </div>
      );
  }
});

module.exports = Categories;

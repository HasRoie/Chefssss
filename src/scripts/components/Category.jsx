/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Link = require('react-router/Link');

require('../../styles/Category.css');
var PageHeader = require('react-bootstrap/PageHeader');
var Grid = require('react-bootstrap/Grid');



var Category = React.createClass({
  render: function () {
    return (
        <Grid>
          <PageHeader>Chefssss<small>  {this.props.params.categoryName} Food  </small>
          <small>
            <Link to="categories">Back</Link>
          </small>
          </PageHeader>
          <p>Content for Category {this.props.params.categoryName}</p>
        </Grid>

      );
  }
});

module.exports = Category;

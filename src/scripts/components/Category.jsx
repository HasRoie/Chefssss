/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Link = require('react-router/Link');

require('../../styles/Category.css');
var PageHeader = require('react-bootstrap/PageHeader');
var Grid = require('react-bootstrap/Grid');
var Button = require('react-bootstrap/Button');



var Category = React.createClass({
  getInitialState: function() {
    this.recepies = [];
    return {recepies: []};
  },
  componentWillMount: function() {
    this.recepiesRef = new Firebase("https://brilliant-fire-612.firebaseio.com/recepies_"+this.props.params.categoryName+"/");
    this.recepiesRef.limit(100).on("child_added", function(dataSnapshot) {
      this.recepies.push(dataSnapshot.val());
      this.setState({
        recepies: this.recepies
      });
    }.bind(this));
  },
  componentDidMount: function(){

  },
  render: function () {

    return (
        <Grid>
          <PageHeader>Chefssss<small>  {this.props.params.categoryName} Food  </small>
          <small>
            <Link to="categories">Back</Link>
          </small>
          </PageHeader>

          <Button bsStyle="primary">
            <Link to="createNew" categoryName={this.props.params.categoryName}>
              New {this.props.params.categoryName}
            </Link>
          </Button>
        </Grid>
      );
  }
});

module.exports = Category;

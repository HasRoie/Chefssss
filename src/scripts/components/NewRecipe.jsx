/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/NewRecipe.css');
var PageHeader = require('react-bootstrap/PageHeader');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Input = require('react-bootstrap/Input');

var NewRecipe = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      recipeName: '',
      recipeContent: '',
    };
  },

  render: function () {
    var category = this.props.params.categoryName;
    return (
        <Grid>
          <PageHeader>New {category} Recipe</PageHeader>
          <Row>
            <Input
              type="text"

              placeholder="Recipe Name"
              label="Creative Recipe Name Goes in This Box Here"
              help="Give a spunky, sofisticated name to your dish"
              hasFeedback

              valueLink={this.linkState('recipeName')}

              groupClassName="group-class"
              wrapperClassName="wrapper-class"
              labelClassName="label-class"/>
          <Input
              type="textarea"

              placeholder="Mouth watering, detailed description of the culinary wonder about to be recieved in our brains"
              label="Detailed Recipe"
              help="Yum."
              hasFeedback
              ref="input"
              groupClassName="group-class"
              wrapperClassName="wrapper-class"
              labelClassName="label-class"

              valueLink={this.linkState('recipeContent')}/>

          </Row>
        </Grid>
      );
  }
});

module.exports = NewRecipe;

/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Navbar.css');

var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Carousel = require('react-bootstrap/Carousel');
var CarouselItem = require('react-bootstrap/CarouselItem');
var PageHeader = require('react-bootstrap/PageHeader');

var FrontpageListItem = require('../../scripts/components/FrontpageListItem.jsx');



var Navbar = React.createClass({
  render: function () {
    var pageName = this.props.name;
    return (
        <Grid>
            <PageHeader>Chefssss<small>  Tune Food Wizards Repo {pageName}</small></PageHeader>

            <Row className="show-grid">
              <Col xs={10}>
                <Carousel>
                  <CarouselItem>
                    <img width={1000} height={200} alt="900x500" src="http://placehold.it/900X500"/>
                    <div className="carousel-caption">
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img width={1000} height={200} alt="900x500" src="http://placehold.it/900X500"/>
                    <div className="carousel-caption">
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <img width={1000} height={200} alt="900x500" src="http://placehold.it/900X500"/>
                    <div className="carousel-caption">
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                  </CarouselItem>
                </Carousel>
              </Col>
              <Col xs={2}>
                <FrontpageListItem content="Breakfast" />
                <FrontpageListItem content="Lunch" />
                <FrontpageListItem content="Dinner" />
              </Col>
              <Col xs={2}>

              </Col>
            </Row>
        </Grid>

      );
  }
});

module.exports = Navbar;

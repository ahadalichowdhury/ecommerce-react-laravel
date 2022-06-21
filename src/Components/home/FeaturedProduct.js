import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import picture from "../../Assets/Images/mobile1.jpg";

export default class FeaturedProduct extends Component {
  render() {
    return (
      <Fragment >
        <h1 className='section-title'>FEATURED PRODUCT</h1>
        <p className='section-sub-title'>This is the latest product component</p>
          <Container fluid={true}>
            <Row >
                <Col xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
                  <Link to="/productdetails">
                   <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
                   </Link>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
                   <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
                   <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
                   <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
                   <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
                </Col>
                <Col xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
                   <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
                </Col>
            </Row>
          </Container>
      </Fragment>
    )
  }
}

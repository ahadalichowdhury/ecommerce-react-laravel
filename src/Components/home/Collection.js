import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Card} from "react-bootstrap";
import picture from "../../Assets/Images/mobile1.jpg";

export default class Collection extends Component {
  render() {
    return (
      <Fragment>
         <h1 className='section-title mt-5'>COLLECTION</h1>
        <p className='section-sub-title'>This is the latest product component</p>
        <Container fluid={true}>
          <Row>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <Card>
                <img src={picture} alt="" />
                <Card.Body>
                  <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                  <p className='product-price-on-card'>Price: 3000TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <Card>
                <img src={picture} alt="" />
                <Card.Body>
                  <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                  <p className='product-price-on-card'>Price: 3000TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <Card>
                <img src={picture} alt="" />
                <Card.Body>
                  <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                  <p className='product-price-on-card'>Price: 3000TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <Card>
                <img src={picture} alt="" />
                <Card.Body>
                  <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                  <p className='product-price-on-card'>Price: 3000TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <Card>
                <img src={picture} alt="" />
                <Card.Body>
                  <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                  <p className='product-price-on-card'>Price: 3000TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <Card>
                <img src={picture} alt="" />
                <Card.Body>
                  <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                  <p className='product-price-on-card'>Price: 3000TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <Card>
                <img src={picture} alt="" />
                <Card.Body>
                  <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                  <p className='product-price-on-card'>Price: 3000TK</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <Card>
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

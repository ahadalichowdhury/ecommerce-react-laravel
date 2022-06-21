import React, { Component, Fragment } from 'react';
import {Container,Row, Col, Button, Form} from "react-bootstrap"

export default class UserOnboard extends Component {
 
  render() {
    
    return (
      <Fragment>
        <Container>
            <Row className="d-flex justify-content-center p-2">
                <Col className="mt-4 card" lg={10} md={10} sm={12} xs={12}>
                  <Row >
                      <Col className="d-flex justify-content-center text-center" lg={6} md={6} sm={12} xs={12}>
                        <Form>
                          <h4 className='section-title'>USER CONTACT PAGE</h4>
                          
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Your Phone Number"/>
                            </Form.Group>
                          
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <button className="contact-btn">NEXT</button>
                            </Form.Group>
                        </Form> 
                      </Col>
                      <Col className="p-0 m-0 Desktop W-100" lg={6} md={6} sm={12} xs={12}>
                            <img className="contact-img" src="https://th.bing.com/th/id/R.0f8f96cd5a41d48ff45a75120dc9c610?rik=zh49jPCx5KaqyA&pid=ImgRaw&r=0" alt="" />
                        </Col>
                  </Row>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

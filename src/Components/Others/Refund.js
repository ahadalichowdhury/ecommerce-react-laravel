import React, { Component } from 'react'
import { Fragment } from 'react'
import {Container,Row, Col} from "react-bootstrap"

export default class Refund extends Component {
  componentDidMount(){
    window.scroll(0, 0);
  }
  render() {
    return (
        <Fragment>
        <Container>
            <Row className="d-flex justify-content-center p-2">
                <Col className="mt-4 card" lg={10} md={10} sm={12} xs={12}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam dignissimos unde delectus animi amet ut qui aperiam tenetur exercitationem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam dignissimos unde delectus animi amet ut qui aperiam tenetur exercitationem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam dignissimos unde delectus animi amet ut qui aperiam tenetur exercitationem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam dignissimos unde delectus animi amet ut qui aperiam tenetur exercitationem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio numquam dignissimos unde delectus animi amet ut qui aperiam tenetur exercitationem.☻</p>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

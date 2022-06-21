import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from "react-bootstrap"
import MegaMenu from './MegaMenu';
import Sliderhome from './Sliderhome';

export default class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu></MegaMenu>
                </Col>
                <Col lg={9} md={9} sm={12}>
                    <Sliderhome></Sliderhome>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

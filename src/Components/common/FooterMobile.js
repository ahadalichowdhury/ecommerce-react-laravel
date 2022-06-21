import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

export default class FooterMobile extends Component {
  render() {
    return (
      <Fragment>
         <div className="card">
        <Container fluid={true}>
            <Row className="px-0 my-5">
                <Col sm={6} xs={6}>
                    <h5 className='footer-menu-title mt-3'>ADDRESS</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quod eaque quasi in vel reprehenderit.</p>
                </Col>
                <Col sm={6} xs={6} className="p-3">
                    <h5 className='footer-menu-title'>Social Link</h5>
                   <div className="d-flex justify-content-space-between p-3">
                        <Link to={"/onboard"}><i className='fab m1 h4 fa-facebook'></i></Link>
                        <Link to={"/onboard"}><i className='fab m1 h4 fa-instagram'></i></Link>
                        <Link to={"/onboard"}><i className='fab m1 h4 fa-twitter'></i></Link>
                   </div>
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className="bg-dark">
            <Container>
                <Row className="px-0 text-center">
                    <h6 className="text-white">WE DELIVER IN</h6>
                    <p className="footer-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, consequuntur!</p>
                </Row>
            </Container>
        </Container>
        </div>
      </Fragment>
    )
  }
}

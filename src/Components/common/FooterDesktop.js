import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
export default class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="card">
        <Container fluid={true}>
            <Row className="px-0 my-5">
                <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title'>ABOUT COMPANY</h5>
                    <p>Big express is good</p>

                    <h5 className='footer-menu-title'>Social Link</h5>
                    <Link to={"/onboard"}><i className='fab m1 h4 fa-facebook'></i></Link>
                    <Link to={"/onboard"}><i className='fab m1 h4 fa-instagram'></i></Link>
                    <Link to={"/onboard"}><i className='fab m1 h4 fa-twitter'></i></Link>
                </Col>
                <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title'>THE COMPANY</h5>
                    
                    <Link to={"/aboutus"} className='footer-link'>ABOUT US</Link><br />
                    <Link to={"/contact"} className='footer-link'>Contact Us</Link><br />
                    <h5 className='footer-menu-title mt-3'>ADDRESS</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quod eaque quasi in vel reprehenderit.</p>
                    
                </Col>

                <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title '>MORE INFO</h5>
                    <Link to={"/purchese"} className='footer-link'>How TO PERCHISE</Link><br />
                    <Link to={"/privacy"} className='footer-link'>PRIVACY POLICY</Link><br />
                    <Link to={"/refund"} className='footer-link'>REFUND POLICY</Link><br />
                </Col>
                <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title '>DOWNLOAD APP</h5>
                    <Link to={"/purchese"}><img src="https://hatil.com/sites/default/files/Apple%20sign.png" alt="" /></Link>
                    <Link to={"/purchese"}><img src="https://hatil.com/sites/default/files/Android%20sign.png" alt="" /></Link>
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className="pt-3 pb-1 bg-dark">
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

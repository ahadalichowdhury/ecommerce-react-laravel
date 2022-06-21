import React, { Component, Fragment } from 'react';
import {Navbar, Container, Row, Col} from "react-bootstrap"
import { Link } from 'react-router-dom';

export default class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <Navbar className="fixed navbar" bg="light">
          <Container>
            <Row>
                <Col lg={4} md={4} sm={12} xs={12} className="brand">
                  <Link to="/">
                    <img className='nav-logo' src="https://th.bing.com/th/id/R.74aa68f1332364923fd25057a241544a?rik=mSiyiWX4tzrMAw&pid=ImgRaw&r=0" alt="" />
                    </Link>
                    <div>
                    <button className='cart-btn'><i className='fa fa-shopping-cart'></i>4items</button>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                    <div className='input-group'>
                        <input type="text" className='form-control'/>
                        <button type='button' className='site-btn'><i className='fa fa-search'></i></button>

                    </div>

                </Col>
                <Col lg={4} md={4} sm={12} xs={12}>
                   <div className='nav-item'>
                   <Link to="/favourite" className='btn'><i className='fa fa-heart'></i><sup><span className='badge bg-danger'>4</span></sup></Link>
                    <Link to="/notification" className='btn'><i className='fa fa-bell'></i><sup><span className='badge bg-danger'>4</span></sup></Link>
                    <a href='ahad.com' className='btn'><i className='fa mobile-alt'></i></a>
                    <Link to="/onboard">SIGNIN</Link>
                   </div>
                </Col>
            </Row>
        </Container>
      </Navbar>
      </Fragment>
    )
  }
}

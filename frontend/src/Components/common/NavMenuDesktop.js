import React, { Component, Fragment } from 'react';
import {Navbar, Container, Row, Col} from "react-bootstrap"
import { Link, Redirect } from 'react-router-dom';
import SessionHelper from '../../SessionHelper/SessionHelper';

export default class NavMenuDesktop extends Component {
  constructor(){
    super();
    this.state={
      Searchkey:"",
      homeRedirect: false,
      SearchRedirectStatus: false,
    }

    this.SearchOnChange= this.SearchOnChange.bind(this);
    this.searchOnClick= this.searchOnClick.bind(this);
    this.searchRedirect= this.searchRedirect.bind(this);
    this.homeRedirect= this.homeRedirect.bind(this);
    this.onLogOut= this.onLogOut.bind(this);
  }

  SearchOnChange(event){
    let Searchkey=event.target.value;
    this.setState({Searchkey:Searchkey})
  }
  searchOnClick(){
    let Searchkey=this.state.Searchkey;
    if(Searchkey.length>=2){
      this.setState({SearchRedirectStatus: true})
    }
  }
  searchRedirect(){
    if(this.state.SearchRedirectStatus === true){
      return <Redirect to={'/ProductListBySearch/'+this.state.Searchkey}></Redirect>
    }
  }
  onLogOut(){
    SessionHelper.removeUserMobile();
    this.setState({homeRedirect:true});

  }
  homeRedirect(){
    if(this.state.homeRedirect === true){
      return <Redirect to={'/'}></Redirect>
    }
  }
  render() {
    if(SessionHelper.getUserMobile()=== null){
      return (
        <Fragment>
          <Navbar className="navbar" fixed={"top"} bg="light">
            <Container>
              <Row>
              <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
              <div className="nav-logo">
              <Link to="/">
                      <img className='nav-img' src="https://th.bing.com/th/id/R.74aa68f1332364923fd25057a241544a?rik=mSiyiWX4tzrMAw&pid=ImgRaw&r=0" alt="" />
                      </Link>
                      <button className='cart-btn'><i className='fa fa-shopping-cart'></i>4 items</button>
              </div>
                </Col>
                <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                      <div className='input-group w-100'>
                          <input  onChange={this.SearchOnChange} type="text" className='search-text-field'/>
                          <button onClick={this.searchOnClick} type='button' className='site-btn '><i className='fa fa-search'></i></button>
  
                      </div>
  
                  </Col>
                  <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                     <div className='nav-item'>
                     <Link to="/favourite" className=''><i className='fa fa-heart'></i><sup><span className='badge bg-danger'>4</span></sup></Link>
                      <Link to="/notification" ><i className='fa fa-bell'></i><sup><span className='badge bg-danger'>4</span></sup></Link>
                      <Link to="/onboard" className='signin'>SIGNIN</Link>
                     </div>
                  </Col>
              </Row>
              {this.searchRedirect()}
              {this.homeRedirect()}
          </Container>
        </Navbar>
        </Fragment>
      )
    }
    else{
      return (
        <Fragment>
          <Navbar className="navbar" fixed={"top"} bg="light">
            <Container>
              <Row>
              <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
              <div className="nav-logo">
              <Link to="/">
                      <img className='nav-img' src="https://th.bing.com/th/id/R.74aa68f1332364923fd25057a241544a?rik=mSiyiWX4tzrMAw&pid=ImgRaw&r=0" alt="" />
                      </Link>
                      <button className='cart-btn'><i className='fa fa-shopping-cart'></i>4 items</button>
              </div>
                </Col>
                <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                      <div className='input-group w-100'>
                          <input  onChange={this.SearchOnChange} type="text" className='search-text-field'/>
                          <button onClick={this.searchOnClick} type='button' className='site-btn '><i className='fa fa-search'></i></button>
  
                      </div>
  
                  </Col>
                  <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                  <div className='nav-item'>
                     <Link to="/favourite" className='btn'><i className='fa fa-heart'></i><sup><span className='badge bg-danger'>4</span></sup></Link>
                      <Link to="/notification" className='btn'><i className='fa fa-bell'></i><sup><span className='badge bg-danger'>4</span></sup></Link>
                      <Link to="/onboard" onClick={this.onLogOut}>LOGOUT</Link>
                     </div>
                  </Col>
                  
              </Row>
              {this.searchRedirect()}
              {this.homeRedirect()}
          </Container>
        </Navbar>
        </Fragment>
      )

    }
   
  }
}

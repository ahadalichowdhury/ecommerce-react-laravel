import React, { Component, Fragment } from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MegaMenuMobile from '../home/MegaMenuMobile';


export default class NavMenuMobile extends Component {
  constructor(){
    super();
    this.state={
        SideNavState: "sideNavClose",
        ContentOverState: "ContentOverlayClose"

    }
}

    MenuBarClickHandler=()=>{
        this.sideNav();
        
    }
    ContentOverlayClickHandler=()=>{
        this.sideNav();

    }

    sideNav=()=>{
        let SideNavState= this.state.SideNavState;
        //let ContentOverState=this.state.ContentOverState;

        if(SideNavState === 'sideNavOpen'){
            this.setState({SideNavState: 'sideNavClose',ContentOverState:'ContentOverlayClose'});
        }else{
            this.setState({SideNavState: 'sideNavOpen',ContentOverState:'ContentOverlayOpen'});
        }
   
    }
  
  
    render() {
    return (
      <Fragment>
             <Container className="shadow-sm p-2 m-0 bg-white">
            <Row>
                <Col lg={12} md={12} sm={12} xs={12} >
                    <button onClick={this.MenuBarClickHandler} className='btn'><i className='fa fa-bars'></i></button>
                </Col>
            </Row>
            </Container>
            <div className={this.state.SideNavState} >
                <MegaMenuMobile></MegaMenuMobile>
            
            </div>

            <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

            </div>
      </Fragment>
    )
  }
}

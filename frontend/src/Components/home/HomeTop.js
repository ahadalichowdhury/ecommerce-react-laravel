import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from "react-bootstrap"
import MegaMenu from './MegaMenu';
import Sliderhome from './Sliderhome';
import axios from "axios";
import ApiURL from "../../Api/ApiURL"
import {toast} from "react-toastify";
import SliderLoader from '../Placeholder/SliderLoader';

export default class HomeTop extends Component {

  constructor(){
    super();
    this.state={
      menuData:[],
      SliderData:[],
      isLoading:"",
      mainDiv:"d-none"
    }
  }


componentDidMount(){
  axios.get(ApiURL.sendCategoryDetails).then((response)=>{
    this.setState({menuData:response.data})    
  }).catch((error)=>{
    toast.error("something is wrong");

  });



  axios.get(ApiURL.sendSliderInfo).then((response)=>{
    this.setState({SliderData:response.data, isLoading:"d-none",mainDiv:""})    
  }).catch((error)=>{
    toast.error("something is wrong");

  });

}

 

  render() {
    return (
      <Fragment>


        <SliderLoader isLoading={this.state.isLoading}></SliderLoader>
       <div className={this.state.mainDiv}>
       <Container fluid={true}>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <MegaMenu data={this.state.menuData}></MegaMenu>
                </Col>
                <Col lg={9} md={9} sm={12}>
                    <Sliderhome data={this.state.SliderData}></Sliderhome>
                </Col>
            </Row>
        </Container>
       </div>
      </Fragment>
    )
  }
}

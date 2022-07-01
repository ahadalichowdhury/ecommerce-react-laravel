import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Card} from "react-bootstrap";

import axios from "axios";
import ApiURL from "../../Api/ApiURL"
import {toast, ToastContainer} from "react-toastify";
import { Link } from 'react-router-dom';
import CategoryPlaceholder from '../Placeholder/CategoryPlaceholder';
export default class Categories extends Component {
    constructor(){
        super();
        this.state={
          menuData:[],
          isLoading:"",
          mainDiv:"d-none"
        }
      }
    
    
    componentDidMount(){
      axios.get(ApiURL.sendCategoryDetails).then((response)=>{
        this.setState({menuData:response.data,isLoading:"d-none",mainDiv:""})    
      }).catch((error)=>{
        toast.error("something is wrong");
    
      });
    
    }


  render() {
   

    let myList = this.state.menuData;
    let myView= myList.map((ParentList, i)=>{
      return <Col key={i.toString()} xl={2} lg={2} md={2} sm={6} xs={6} className="p-0 featured-card featured">
                 <Link to={"ProductListByCategory/"+ParentList.parentCategoryName}>
                                <Card className="image-box card">
                                    <img src={ParentList.parentCategoryImg} alt="" />
                                    <Card.Body>
                                    <p className='category-name text-center'>{ParentList.parentCategoryName}</p>
                                    </Card.Body>
                                </Card>
                                </Link>
            </Col>
      
    })
    return (
      <Fragment >
        <CategoryPlaceholder isLoading={this.state.isLoading}></CategoryPlaceholder>
        <h1 className='section-title'>CATEGORIES</h1>
        <p className='section-sub-title'>This is the latest product component</p>
         <div className={this.state.mainDiv}>
         <Container fluid={true} >
            <Row >
               {myView}
               
            </Row>           
          </Container>
         </div>
      </Fragment>
    )
  }
}

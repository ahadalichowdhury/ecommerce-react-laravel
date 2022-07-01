import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Card} from "react-bootstrap";
import picture from "../../Assets/Images/mobile1.jpg";
import axios from "axios";
import ApiURL from "../../Api/ApiURL";
import {toast, ToastContainer} from "react-toastify";
import SpecialCollectionPlaceholder from "../Placeholder/SpecialCollectionPlaceholder"
import { Link } from 'react-router-dom';

export default class Collection extends Component {

  constructor(){
    super();
     this.state={
       CollectionData:[],
       isLoading:"",
       mainDiv:"d-none"
 
     }
   }
 
   componentDidMount(){
 
     axios.get(ApiURL.ProductListByRemark('COLLECTION')).then((response)=>{
       this.setState({CollectionData: response.data,isLoading:"d-none",mainDiv:""})
 
       
     }).catch((error)=>{
       toast.error("something is wrong");
 
     });
   }


  render() {

    let myList= this.state.CollectionData;
    let myView = myList.map((CollectionList, i)=>{


      if(CollectionList.special_price==="NA"){


        return  <Col key={i} xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
          <Link to={"ProductDetails/"+CollectionList.product_code}>
        <Card className="image-box card">
          <img src={CollectionList.image} alt="" />
        <Card.Body>
          <p className='product-name-on-card'>{CollectionList.title}</p>
          <p className='product-price-on-card'>Price:{CollectionList.price}</p>
        </Card.Body>
        </Card>
        </Link>
   </Col>
        
      }else{

        return  <Col key={i} xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
           <Link to={"ProductDetails/"+CollectionList.product_code}>
            <Card className="image-box card">
              <img src={CollectionList.image} alt="" />
            <Card.Body>
              <p className='product-name-on-card'>{CollectionList.title}</p>
              <p className='product-price-on-card'> <strike> Price:{CollectionList.price}</strike> <span>New:{CollectionList.special_price}</span></p>
              {/* <p className='product-price-on-card'></p> */}
            </Card.Body>
            </Card>
            </Link>
     </Col>

      }
     
    })


    return (
      <Fragment>
         <h1 className='section-title mt-5'>COLLECTION</h1>
        <p className='section-sub-title'>This is the latest product component</p>
        <SpecialCollectionPlaceholder isLoading={this.state.isLoading}></SpecialCollectionPlaceholder>
        
        <div className={this.state.mainDiv}>
        <Container fluid={true}>
          <Row>
           
            {myView}
          </Row>
        </Container>
        </div>
      </Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Card} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../Api/ApiURL";
import {toast, ToastContainer} from "react-toastify";
import FeaturedProductLoader from '../Placeholder/FeaturedProductLoader';
import { Link } from 'react-router-dom';

export default class FeaturedProduct extends Component {

  constructor(){
   super();
    this.state={
      ProductData:[],
      isLoading:"",
      mainDiv:"d-none"

    }
  }

  componentDidMount(){

    axios.get(ApiURL.ProductListByRemark('FEATURED')).then((response)=>{
      this.setState({ProductData: response.data,isLoading:"d-none",mainDiv:""})

      
    }).catch((error)=>{
      toast.error("something is wrong");

    });
  }
  render() {

    let myList= this.state.ProductData;
    let myView = myList.map((ProductList, i)=>{


      if(ProductList.special_price==="NA"){


        return  <Col key={i} xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
          <Link to={"ProductDetails/"+ProductList.product_code}>
        <Card className="image-box card">
          <img src={ProductList.image} alt="" />
        <Card.Body>
          <p className='product-name-on-card'>{ProductList.title}</p>
          <p className='product-price-on-card'>Price:{ProductList.price}</p>
        </Card.Body>
        </Card>
        </Link>
   </Col>
        
      }else{

        return  <Col key={i} xl={2} lg={2} md={2} sm={4} xs={6} className="featured-card featured">
           <Link to={"ProductDetails/"+ProductList.product_code}>
            <Card className="image-box card">
              <img src={ProductList.image} alt="" />
            <Card.Body>
              <p className='product-name-on-card'>{ProductList.title}</p>
              <p className='product-price-on-card'> <strike> Price:{ProductList.price}</strike> <span>New:{ProductList.special_price}</span></p>
              {/* <p className='product-price-on-card'></p> */}
            </Card.Body>
            </Card>
            </Link>
     </Col>

      }
     
    })
    return (
      <Fragment >

        <FeaturedProductLoader isLoading={this.state.isLoading}></FeaturedProductLoader>
        <h1 className='section-title'>FEATURED PRODUCT</h1>
        <p className='section-sub-title'>This is the latest product component</p>
         <div className={this.state.mainDiv}>
         <Container fluid={true}>
            <Row >
                
               {myView}
            </Row>
          </Container>
         </div>
      </Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import {Container, Card} from "react-bootstrap";
import picture from "../../Assets/Images/mobile1.jpg";
import axios from "axios";
import ApiURL from "../../Api/ApiURL";
import {toast, ToastContainer} from "react-toastify";
import NewArraivalPlaceholder from '../Placeholder/NewArrivalPlaceholder';
import { Link } from 'react-router-dom';

export default class NewArrival extends Component {

    constructor(props){
        super(props);
        this.next= this.next.bind(this)
        this.previous= this.previous.bind(this);
        this.state={
          ProductData:[],
          isLoading:"",
          mainDiv:"d-none"
    
        }
    }

    componentDidMount(){

      axios.get(ApiURL.ProductListByRemark('NEW')).then((response)=>{
        this.setState({ProductData: response.data,isLoading:"d-none",mainDiv:""})
  
        
      }).catch((error)=>{
        toast.error("something is wrong");
  
      });
    }

    next(){
        this.slider.slickNext();

    }
    previous(){
        this.slider.slickPrev();

    }
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplayspeed:3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



      let myList= this.state.ProductData;
      let myView = myList.map((ProductList, i)=>{
  
  
        if(ProductList.special_price==="NA"){
  
  
          return <div key={i}>
            <Link to={"ProductDetails/"+ProductList.product_code}>
            <Card className="image-box card">
          <img src={ProductList.image} alt="" />
        <Card.Body>
          <p className='product-name-on-card'>{ProductList.title}</p>
          <p className='product-price-on-card'>Price:{ProductList.price} </p>
        </Card.Body>
      </Card>
      </Link>
      </div>
          
        }else{
  
          return  <div key={i}>
            <Link to={"ProductDetails/"+ProductList.product_code}>
            <Card className="image-box card">
          <img src={ProductList.image} alt="" />
        <Card.Body>
          <p className='product-name-on-card'>{ProductList.title}</p>
          <p className='product-price-on-card'> <strike> Price:{ProductList.price}</strike> <span>New:{ProductList.special_price}</span></p>
        </Card.Body>
      </Card>
      </Link>
      </div>
  
        }
       
      })



    return (
      <Fragment>
         <h1 className='section-title'>NEW ARRAIVAL
            <p className='btn' onClick={this.previous}>
                <i className='fa fa-angle-left'></i>
            </p>
            <p className='btn' onClick={this.next}>
                <i className='fa fa-angle-right'></i>
            </p>
         </h1>
        <p className='section-sub-title'>This is the latest product component</p>
        <NewArraivalPlaceholder isLoading={this.state.isLoading}></NewArraivalPlaceholder>
       <div className={this.state.mainDiv}>
       <Container fluid={true}>
         <Slider ref={c=>this.slider=c} {...settings}>
         
            {myView}
          
        </Slider>
        </Container>
       </div>
      </Fragment>
    )
  }
}

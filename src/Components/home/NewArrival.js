import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import {Container, Card} from "react-bootstrap";
import picture from "../../Assets/Images/mobile1.jpg";

export default class NewArrival extends Component {

    constructor(props){
        super(props);
        this.next= this.next.bind(this)
        this.previous= this.previous.bind(this)
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
        <Container fluid={true}>
         <Slider ref={c=>this.slider=c} {...settings}>
          <div>
          <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
          </div>
          <div>
          <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
          </div>
          <div>
          <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
          </div>
          <div>
          <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
          </div>
          <div>
          <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
          </div>
          <div>
          <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
          </div>
          <div>
          <Card className="image-box card">
                      <img src={picture} alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>ASUS 404iso FiLE</p>
                      <p className='product-price-on-card'>Price: 3000TK</p>
                    </Card.Body>
                   </Card>
          </div>
        </Slider>
        </Container>
      </Fragment>
    )
  }
}

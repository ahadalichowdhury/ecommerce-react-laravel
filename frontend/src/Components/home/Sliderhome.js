import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

 class Sliderhome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    
    const SliderData=this.props.data;
    const SliderView=  SliderData.map((SliderList)=>{

        return <div key={SliderList.id} className="container-fluid m-0 p-0 overflow-hidden w-100 shadow-sm">
          <div style={{backgroundColor:SliderList.bg_color}} className="m-0 p-0 slider">
            <div className="row card-body sliderTitleDiv">
                <div className="col-md-6  text-center">
                    <h1 style={{color:SliderList.text_color}} className="sliderTitle">{SliderList.title}</h1>
                    <h1 style={{color:SliderList.text_color}} className="sliderSubTitle">
                        {SliderList.sub_title}
                    </h1>
                    <Link to={"ProductDetails/"+SliderList.product_code} className="slider-btn px-5">More Info</Link>
                </div>
                <div className="col-md-6 text-center">
                    <img className="slider-image" src={SliderList.image} alt="" />
                </div>
            </div>
        </div>
        </div>

     })

   
    return (
      <div>
         <Slider {...settings}>
         {SliderView}
        </Slider>
      </div>
    )
  }
}

export default Sliderhome;
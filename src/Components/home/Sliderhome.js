import React, { Component } from 'react';
import Slider from "react-slick";

export default class Sliderhome extends Component {
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
    return (
      <div>
         <Slider {...settings}>
          <div>
            <img className='slider-image' src="https://th.bing.com/th/id/R.60708e358501f0bfdb63ddee65bbf411?rik=joU0NhXTyWBPtw&pid=ImgRaw&r=0" alt="" />
          </div>
          <div>
            <img className='slider-image' src="https://th.bing.com/th/id/R.19b76cb5b65b6a3d800413ff67a33584?rik=25tquWgzwWqdjg&riu=http%3a%2f%2flogoman.ca%2fwp-content%2fuploads%2f2018%2f01%2fSlider-Banner-Programming-Image--1024x375.jpg&ehk=vygBHMhaoSyqKJIPh9J6n96%2bXyvEAzMjDe0ltjltunc%3d&risl=&pid=ImgRaw&r=0" alt="" />
          </div>
          <div>
            <img className='slider-image' src="https://th.bing.com/th/id/R.60708e358501f0bfdb63ddee65bbf411?rik=joU0NhXTyWBPtw&pid=ImgRaw&r=0" alt="" />
          </div>
        </Slider>
      </div>
    )
  }
}

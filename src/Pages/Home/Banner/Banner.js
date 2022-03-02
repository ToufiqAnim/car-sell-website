import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import Header from "../../Shared/Header/Header";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="banner-section">
      <Header></Header>
        <Slider {...settings} >
          <div className="banner">
            <img className="banner-img" src="https://wallpaperaccess.com/full/1921102.jpg" alt="" /> 

             <div className='banner-text-btn'>
             <h1 className="brand-text"  style={{margin:0, color:'white'}}>Top Brands 2022</h1>
              <h1 className='banner-text'>Find Your Dream Car</h1> 
             
              <p>
              We can help you find the best car. Check our reviews, compare models and find cars for sale.
              </p>
              <button className="banner-btn"> Know More</button>
             </div>
          </div>

          <div className="banner">
        <img className="banner-img" src="https://images4.alphacoders.com/105/thumb-1920-1057695.jpg" alt="" />

            <div className='banner-text-btn'>
            <h1 className="brand-text" style={{margin:0, color:'#dd3d53'}}>Top Brands 2022</h1>
              <h1 className='banner-text'>Find Your Dream Car</h1> 
             
              <p>
              We can help you find the best car. Check our reviews, compare models and find cars for sale.
              </p>
              <button className="banner-btn"> Know More</button>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}
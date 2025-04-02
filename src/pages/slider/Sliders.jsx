import React, { useContext } from 'react'
import './slider.css'
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import { LanguageContext } from '../../utils/LanguageContext';

const Sliders = () => {
  const settings = {
    autoplay: true,       // Avtomatik slayder
    autoplaySpeed: 3000,  // Har 3 soniyada slayd o‘zgaradi
    dots: false,           // Pastki indikatorlar (dots)
    infinite: true,       // Cheksiz qaytariladi
    speed: 500,           // Animatsiya tezligi
    slidesToShow: 1,      // Bir vaqtning o‘zida 1 ta slayd
    slidesToScroll: 1,    // Harakatlanadigan slayd soni
    arrows: false         // Oldinga va orqaga o‘tish tugmalarini o‘chiradi
  };
    const { l } = useContext(LanguageContext);



  return (
    <div className='slider'>
      <Slider {...settings}>
      <div className='slider-1'>
        <div className='slide-title'>
          <p className='slide-text1'>{l.sliderTitle1}</p>
          <p className='slide-text2'>
            {l.sliderText1}
          </p>
        </div>
        </div>
        <div className='slider-2'>
        <div className='slide-title'>
          <p className='slide-text1'>{l.sliderTitle2}</p>
          <p className='slide-text2'>
          {l.sliderText2}
          </p>
        </div>
        </div>
        <div className='slider-3'>
        <div className='slide-title'>
          <p className='slide-text1'>{l.sliderTitle3}</p>
          <p className='slide-text2'>
          {l.sliderText3}
          </p>
        </div>
        </div>
      </Slider>
    </div>
  )
}

export default Sliders
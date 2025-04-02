import React, { useContext } from 'react'
import './autoslider.css'
import Marquee from 'react-fast-marquee'
import { miniliderImg, sliderImg } from '../../utils/SlidersImg'
import { LanguageContext } from '../../utils/LanguageContext'
const AutoSlider = () => {
  const { l } = useContext(LanguageContext);

  return (
    <div className='auto-slider-primary'>
        <div className='slider-info-container'>
           <div className='info-container'>
            <div className='info-text'>
            <p className='info'>{l.avtoSliderTitle}</p>
            </div>
            <div className='info-btn'>
                <button><a href="#">{l.avtoSliderInsta}</a></button>
                <button><a href="#">{l.avtoSliderTg}</a></button>
            </div>
           </div>
        </div>
        <div className='auto-slider-container'>
            <Marquee >
                  {sliderImg.map((item)=>(
                <div className='sliders' id={item.id}>

                  <img src={item.img} alt="" />
                </div>

                  ))}
            </Marquee>
            <Marquee direction='right' speed={50}>
              {miniliderImg.map((item)=>(
                   <div className='slider-mini' id={item.id}>
                   <img src={item.img} alt="" />
                 </div>
              ))}
            </Marquee>
        </div>
    </div>
  )
}

export default AutoSlider
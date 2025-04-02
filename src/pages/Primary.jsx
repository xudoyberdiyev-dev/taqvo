import React, { useContext, useEffect } from 'react'
import './primary.css'
import Navbar from '../components/navbar/Navbar'
import Marquee from 'react-fast-marquee'
import logo from '../assets/images/logooo.png'
import { LanguageContext } from '../utils/LanguageContext'
const Primary = () => {
    const { l,language } = useContext(LanguageContext);

    useEffect(() => {
      document.documentElement.setAttribute("data-lang", language);
  }, [language]);
  return (
    <div className='primary'>
        <Navbar/>
        <div className='dashboard-section'>
          <div className='dashboard-text'>
            <p className='text'>
              <Marquee>
              <b>{l.primaryTextSlider}</b>
              </Marquee>
              </p>
          </div>
          <div className='dashboard-about'>
            <div className='dashboard-about-container'>
            <div className='about-text'>
              <p>{l.primaryText}</p>
            </div>
            <div className='about-cercle'>
              <div className='logo-circle'>
                <img src={logo} alt="" />
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Primary
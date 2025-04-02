import React, { useContext } from 'react'
import './footer.css'
import { LanguageContext } from '../../utils/LanguageContext';
const Footer = () => {
    const { l } = useContext(LanguageContext);
  
  return (
    <footer className='footer'>
      <div className='footer-body'>
        <div className='footer-text'>
          <p>
          {l.footerTitle1}
          </p>
        </div>
        <div className='footer-icon'>
          <div className='icon-1'>
          <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="icon-2">
          <i class="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className='footer-title'>
          <p>{l.footerTitle2}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
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

            <a href="https://www.instagram.com/aqvo_jiz/">
          <i class="fa-brands fa-instagram"></i>
          </a>

          </div>
          <div className="icon-2">
            <a href="https://www.telegram.com">
          <i class="fa-brands fa-telegram"></i>
            </a>
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
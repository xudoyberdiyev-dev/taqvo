import React, { useContext, useState } from 'react';
import './navbar.css';
import navbarLogo from '../../assets/images/taqvologonavbar.png';
import { LanguageContext } from '../../utils/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, l } = useContext(LanguageContext);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleOfcanvas = () => {
    setOpen(!open);
  };

  
  const lanArr = [
    { name: "UZB", lan: "uzb" },
    { name: "ENG", lan: "eng" },
    { name: "RU", lan: "rus" }
  ];

 

  return (
    <div className="container">
      <div className="container-section">
        <div className="navbar">
          <div className="navbar-ul">
            <ul>
              <li><a href="#">{l.navTile1}</a></li>
              <li><a href="#">{l.navtitle2}</a></li>
            </ul>
          </div>
          <div className="navbar-logo">
            <img src={navbarLogo} alt="Navbar Logo" className="navbar-img" />
          </div>
          <div className="hiddeng-blog">
            <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
            {lanArr.find(item => item.lan === language)?.name} {isOpen ? "▲" : "▼"}
            </button>
              {isOpen && (
                <div className="dropdown-content">
                {lanArr.map((item) => (
                  <div key={item.lan} className="dropdown-item" onClick={() => setLanguage(item.lan)}>
                    {item.name}
                  </div>
                ))}
              </div>
              )}
            </div>
            <div className="contact-as">
              <button className="custom-button">{l.navBtn}</button>
            </div>
          </div>
          <div className="media-button" onClick={toggleOfcanvas}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>

      {open && (
        <div className="open-menu">
          <div className="close-menu" onClick={toggleOfcanvas}>
            <i className="fa fa-times close-btn"></i>
          </div>
          <div className="menu-bar">
            <img src={navbarLogo} alt="Navbar Logo" />
            <div>
              <li><a href="#">{l.navTile1}</a></li>
            </div>
            <div>
              <li><a href="#">{l.navtitle2}</a></li>
            </div>
              <div  className="language-btn">
              {lanArr.map((item) => (
                  <button key={item.lan} className="dropdown-item" onClick={() => setLanguage(item.lan)}>
                    {item.name}
                  </button>
                ))}
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

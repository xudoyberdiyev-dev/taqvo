import React, { useContext, useState } from 'react';
import './navbar.css';
import navbarLogo from '../../assets/images/taqvologonavbar.png';
import { LanguageContext } from '../../utils/LanguageContext';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";
import axios from 'axios';

const Navbar = () => {

   const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [fileds, setFileds] = useState("");
    const [choes, setChoes] = useState("");
    const [text, setText] = useState("");
    const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [fieldsError, setFieldsError] = useState("");
  const [choiceError, setChoiceError] = useState("");
  const [textError, setTextError] = useState("");


  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModal,setIsModal]=useState(false)
  const { language, setLanguage, l } = useContext(LanguageContext);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleModal=()=>[
    setIsModal(!isModal)
  ]
  const toggleOfcanvas = () => {
    setOpen(!open);
  };

  
  const lanArr = [
    { name: "UZB", lan: "uzb" },
    { name: "ENG", lan: "eng" },
    { name: "RU", lan: "rus" }
  ];

  const validateFullData = () => {
    let isValid = true;
  
    if (!name.trim()) {
      setNameError("Iltimos, ismingizni kiriting");
      isValid = false;
    } else setNameError("");
  
    if (!surname.trim()) {
      setSurnameError("Iltimos, familyangizni kiriting");
      isValid = false;
    } else setSurnameError("");
  
    if (!phone.trim()) {
      setPhoneError("Iltimos, telefon raqamingizni kiriting");
      isValid = false;
    } else setPhoneError("");
  
    if (!username.trim()) {
      setUsernameError("Iltimos, foydalanuvchi nomini kiriting");
      isValid = false;
    } else setUsernameError("");
  
    if (!fileds.trim()) {
      setFieldsError("Iltimos, hududni kiriting");
      isValid = false;
    } else setFieldsError("");
  
    if (!choes.trim()) {
      setChoiceError("Iltimos, tanlovni belgilang");
      isValid = false;
    } else setChoiceError("");
  
    if (!text.trim()) {
      setTextError("Iltimos, xabarni kiriting");
      isValid = false;
    } else setTextError("");
  
    return isValid;
  };
  
  
  
    const TELEGRAM_BOT_TOKEN = "7954710522:AAH1CTOhqSStEyRvDJCxFNRcr6eCoE5y4LU"; // Bot token
    const CHAT_ID = "-1002556923288"; // Olingan kanal ID
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  
    const sendMessage = async () => {
  
      if(!validateFullData())
        return;
      const message = `
  📩 *Yangi Xabar*  
  👤 *Ism:* ${name}  
  🧑‍💼 *Familiya:* ${surname}  
  📞 *Telefon:* ${phone}  
  💬 *Telegram Username:* ${username}  
  🌍 *Hudud:* ${fileds}  
  📌 *Xizmat turi:* ${choes}  
  📝 *Xabar:* ${text}
      `;
  
      try {
        await axios.post(url, {
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        });
  
        toast.success("Xabar yuborildi");
        setName("");
        setSurname("");
        setPhone("");
        setUsername("");
        setFileds("");
        setChoes("");
        setText("");
      } catch (error) {
        console.error(error);
        toast.error("Xabar yuborishda xatolik yuz berdi");
      }
    };

  return (
    <div className="container">
      <div className="container-section">
        <div className="navbar">
          <div className="navbar-ul">
            <ul>
              <li><Link to="/">{l.navTile1}</Link></li>
              <li><Link to={'/about'} >{l.navtitle2}</Link></li>
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
              <button className="custom-button" onClick={toggleModal}>{l.navBtn}</button>
            </div>
          </div>
          <div className="media-button" onClick={toggleOfcanvas}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
       
      </div>

      {isModal&&(
       <div className="modal-overlay">
       <div className="contact-form">
         <button className="close-button" onClick={toggleModal}>&times;</button>
 
         <div className="form-grid">
           <div>
           <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.name}
                />
           <small style={{color:'red'}}>{nameError}</small>
           </div>
           <div>
           <input
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.surname}
                />
             <small style={{color:'red'}}>{surnameError}</small>
           </div>
           <div>
           <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.phone}
                />
             <small style={{color:'red'}}>{phoneError}</small>
           </div>
           <div>
           <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.username}
                />
             <small style={{color:'red'}}>{usernameError}</small>
           </div>
           <div>
           <input
                  value={fileds}
                  onChange={(e) => setFileds(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.filed}
                />
             <small style={{color:'red'}}>{fieldsError}</small>
           </div>
           <div>
           <select
                  className="input-style"
                  onChange={(e) => setChoes(e.target.value)}
                >
                  <option value="" style={{color:"black"}}>Xizmat turini tanlang</option>
                  <option value="Mahsulot" style={{ color: "black" }}>
                    Mahsulot
                  </option>
                  <option value="Franshiza" style={{ color: "black" }}>
                    Franshiza
                  </option>
                </select>
             <small style={{color:'red'}}>{choiceError}</small>
           </div>
         </div>
 
         <div className="textarea-wrapper">
           <textarea rows="4" placeholder="Xabar" className="textarea"></textarea>
           <small style={{color:'red'}}>{textError}</small>
         </div>
 
         <div>
           <button onClick={sendMessage} className="submit-buttonss">Yuborish</button>
         </div>
       </div>
     </div>
      )}


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

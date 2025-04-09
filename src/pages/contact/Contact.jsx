import React, { useContext, useState } from "react";
import "./contact.css";
import { LanguageContext } from "../../utils/LanguageContext";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
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


  const { l } = useContext(LanguageContext);

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
    <div className="contact-primary">
      <div className="contact-img">
        <div className="contact-container">
          <div className="contact-section">
            <div className="contact-abou">
              <div className="contact-title">
                <p>{l.contactTitle}</p>
                <p className="contact-about">{l.contactText}</p>
                <div className="_contact">
                  <p className="contacttt">{l.contactAbout} </p>
                  <p className="contact-tel">{l.contactTel1}</p>
                  <p className="contact-tel">{l.contactTel2}</p>
                </div>
              </div>
            </div>
            <div className="contact-register">
              <div className="input-container">
                <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.name}
                />
                </div>
                <input
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.surname}
                />
              </div>
              <div style={{display:"flex",justifyContent:"space-between",width:"100%",height:'15px'}}>
              <small style={{color:'red'}}>{nameError}</small>
              <small style={{color:'red'}}>{surnameError}</small>

              </div>
              <div className="input-container">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.phone}
                />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.username}
                />
              </div>
              <div style={{display:"flex",justifyContent:"space-between",width:"100%",height:'15px'}}>
              <small style={{color:'red'}}>{phoneError}</small>
              <small style={{color:'red'}}>{usernameError}</small>

              </div>
              <div className="input-container">
                <input
                  value={fileds}
                  onChange={(e) => setFileds(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.filed}
                />
                <select
                  className="input-style"
                  onChange={(e) => setChoes(e.target.value)}
                >
                  <option value="">Xizmat turini tanlang</option>
                  <option value="Mahsulot" style={{ color: "black" }}>
                    Mahsulot
                  </option>
                  <option value="Franshiza" style={{ color: "black" }}>
                    Franshiza
                  </option>
                </select>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",width:"100%",height:'15px'}}>
              <small style={{color:'red'}}>{fieldsError}</small>
              <small style={{color:'red'}}>{choiceError}</small>

              </div>
              <div className="input-container-area">
                <textarea 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  className="input-style-area"
                  placeholder={l.text}
                ></textarea>
              </div>
              <small style={{color:'red'}}>{textError}</small>
              <div className="submit-button">
                <button onClick={sendMessage}>{l.send}</button>
              </div>
            </div>
            {/*  */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

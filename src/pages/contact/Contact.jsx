import React, { useContext, useState } from "react";
import "./contact.css";
import { LanguageContext } from "../../utils/LanguageContext";
import toast from "react-hot-toast";
import axios from "axios";
import { validateFullData } from "../../utils/validate";

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [fileds, setFileds] = useState("");
  const [choes, setChoes] = useState("");
  const [text, setText] = useState("");
  const [setError]=useState('')

  const { l } = useContext(LanguageContext);

  const TELEGRAM_BOT_TOKEN = "7954710522:AAH1CTOhqSStEyRvDJCxFNRcr6eCoE5y4LU"; // Bot token
  const CHAT_ID = "-1002556923288"; // Olingan kanal ID
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const sendMessage = async () => {

    const errorMessage=validateFullData(name,surname,phone,username,fileds,choes,text)
    if(errorMessage){
      setError(errorMessage)
      return
    }
    setError('')

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
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.name}
                />
                
                <input
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  type="text"
                  className="input-style"
                  placeholder={l.surname}
                />
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
              <div className="input-container-area">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  className="input-style-area"
                  placeholder={l.text}
                ></textarea>
              </div>
              <div className="submit-button">
                <button onClick={sendMessage}>{l.send}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

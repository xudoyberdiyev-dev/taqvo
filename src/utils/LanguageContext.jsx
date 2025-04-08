import React, { createContext, useState } from "react";
import uz from "./uz.json";
import en from "./en.json";
import ru from "./ru.json";

export const LanguageContext = createContext();

const languages = { uzb: uz, eng: en, rus: ru };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("__lan__") || "uzb");

  const changeLanguage = (lang) => {
    localStorage.setItem("__lan__", lang);
    window.location.reload(); // Sahifani qayta yuklash
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, l: languages[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};



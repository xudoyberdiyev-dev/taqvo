import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { LanguageContext, LanguageProvider } from '../../utils/LanguageContext';

const About = () => {
   const { l,language } = useContext(LanguageContext);
  
      useEffect(() => {
        document.documentElement.setAttribute("data-lang", language);
    }, [language]);
  return (
    <LanguageProvider>
      <Navbar/>
    </LanguageProvider>
  )
}

export default About
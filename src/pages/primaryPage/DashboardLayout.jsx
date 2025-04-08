import React from 'react'
import Contact from "../contact/Contact"
import ImgPage from "../imgpage/ImgPage"
import Primary from "../Primary"
import Sertifikat from "../serificat/Sertifikat"
import Sliders from '../slider/Sliders'
import AutoSlider from '../avtoslider/AutoSlider'
import Footer from '../../components/footer/Footer'
import { LanguageProvider } from '../../utils/LanguageContext'

const DashboardLayout = () => {
  return (
    <>
     <LanguageProvider>

<Primary />
<ImgPage />
<Sliders/>
<AutoSlider />
<Contact />
<Sertifikat />
<Footer/>
</LanguageProvider>
    </>

 
  )
}

export default DashboardLayout
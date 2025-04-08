import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Footer from "../components/footer/Footer"
import AutoSlider from "../pages/avtoslider/AutoSlider"
import Contact from "../pages/contact/Contact"
import ImgPage from "../pages/imgpage/ImgPage"
import Primary from "../pages/Primary"
import Sertifikat from "../pages/serificat/Sertifikat"
import Sliders from "../pages/slider/Sliders"

import { LanguageProvider } from "../utils/LanguageContext"
import DashboardLayout from "../pages/primaryPage/DashboardLayout"
import About from "../pages/about/About"


function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardLayout/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
   

    
   
  )
}

export default App

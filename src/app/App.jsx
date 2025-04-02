import Footer from "../components/footer/Footer"
import AutoSlider from "../pages/avtoslider/AutoSlider"
import Contact from "../pages/contact/Contact"
import ImgPage from "../pages/imgpage/ImgPage"
import Primary from "../pages/Primary"
import Sertifikat from "../pages/serificat/Sertifikat"
import Sliders from "../pages/slider/Sliders"

import { LanguageProvider } from "../utils/LanguageContext"


function App() {

  return (
    <LanguageProvider>

    <Primary />
    <ImgPage />
    <Sliders/>
    <AutoSlider />
    <Contact />
    <Sertifikat />
    <Footer />
    </LanguageProvider>

    
   
  )
}

export default App

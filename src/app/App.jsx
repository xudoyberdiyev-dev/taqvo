import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
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

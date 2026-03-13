import './App.css'
import ContactPage from './Component/Contactus/Contactus'
import SolarFooter from './Component/Footer'
import Header from './Component/Header'
import HomeMain from './Component/Home/HomeMain'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      {/* Add padding because header is fixed */}
      <div className="pt-32">
        <Routes>
          <Route path='/' element={<HomeMain />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/products' element={<Products />} /> */}
          {/* <Route path='/services' element={<Services />} /> */}
          {/* <Route path='/careers' element={<Careers />} /> */}
          {/* <Route path='/blog' element={<Blog />} /> */}
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>

      <SolarFooter />
    </>
  )
}

export default App
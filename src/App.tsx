import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import SolarFooter from './Component/Footer'
import Header from './Component/Header'
import HomeMain from './Component/Home/HomeMain'
import WhatsAppWidget from './Component/WhatsAppWidget'
import { Toaster } from 'react-hot-toast'

import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './Component/ScrollToTop'

// Import all pages
import SEO from './Component/SEO'

import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsOfService from './Pages/TermsOfService'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <Header />

      <ScrollToTop />
      <div className="pt-32">
        <Routes>
          <Route path='/' element={<><SEO title="Home | Pride Eco Trade" description="Renewable energy company delivering reliable solar products and EPC solutions across India." /><HomeMain /></>} />

          <Route path='/privacy-policy' element={<><SEO title="Privacy Policy | Pride Eco Trade" description="Our privacy policy." /><PrivacyPolicy /></>} />
          <Route path='/terms-of-service' element={<><SEO title="Terms of Service | Pride Eco Trade" description="Our terms of service." /><TermsOfService /></>} />
        </Routes>
      </div>

      <SolarFooter />
      <WhatsAppWidget />
    </>
  )
}

export default App
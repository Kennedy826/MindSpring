import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import WorkingStep from './components/WorkingStep'
import Contact from './components/Contact'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='font-primary'>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WorkingStep/>
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'

import Home from './Pages/Home'
import About from './Pages/About'
import Pricing from './Pricing/Pricing'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Nav from './Components/Nav'

function App() {
  return (
    <div className=''>
      <Nav/>
      <Home/>
      <About/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
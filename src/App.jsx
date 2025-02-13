import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Benefits from './Components/Benefits'
import Compare from './Components/Compare'
import Testimonials from './Components/Testimonials'
import Download from './Components/Download'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden bg-black'>
      <Header />
      <About />
      <Benefits />
      <Compare />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  )
}

export default App
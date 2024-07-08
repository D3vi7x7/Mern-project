import React from 'react'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testim from './Components/Testimonials/Testim'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <div className='container'>
        <Title title = 'Our Programs' subtitle = 'What we offer'/>
        <Program/>
        <About/>
        <Title title = 'Gallery' subtitle = 'College Captures'/>
        <Gallery/>
        <Title title = 'Testimonials' subtitle = 'Reviews from the alumnis'/>
        <Testim/>
        <Title title = 'Contact Us' subtitle = 'Reach out to us for further Queries'/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
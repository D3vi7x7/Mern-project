import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'

const Nav = () => {

  const[stick,setStick] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',() =>{
      window.scrollY > 100 ? setStick(true) : setStick(false);
    })
    },[])

  return (
    <nav className={`container ${stick ? 'dark' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Program</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Nav
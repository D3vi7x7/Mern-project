import React from 'react'
import './About.css'
import image1 from '../../assets/about.png'
import image2 from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='About'>
        <div className='about_txt'>
            <h1>About our institute</h1>
            <h3>McGill University is one of Canada's best-known institutions of higher learning and one of the leading universities in the world. International students from more than 150 countries make up nearly 30% of McGill's student body , the highest proportion of any Canadian research university.
            </h3>
            <button className='btn darkbtn'>Know more →</button>
        </div>
        <div className='about_img'>
            <img src={image1} alt="" className='Vid'/>
            <img src={image2} alt="" className='play'/>
        </div>
    </div>
  )
}

export default About
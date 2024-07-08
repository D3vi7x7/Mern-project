import React from 'react'
import './Gallery.css'
import image1 from '../../assets/gallery-1.png'
import image2 from '../../assets/gallery-2.png'
import image3 from '../../assets/gallery-3.png'
import image4 from '../../assets/gallery-4.png'

const Gallery = () => {
  return (
    <div className='gall'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
    </div>
  )
}

export default Gallery
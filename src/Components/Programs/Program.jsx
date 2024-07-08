import React from 'react'
import './Program.css'
import prog1 from '../../assets/program-1.png'
import prog2 from '../../assets/program-2.png'
import prog3 from '../../assets/program-3.png'
import progic1 from '../../assets/program-icon-1.png'
import progic2 from '../../assets/program-icon-2.png'
import progic3 from '../../assets/program-icon-3.png'

const program = () => {
  return (
    <div className='Programs'>
        <div className='program'>
            <img src={prog1} alt="" />
            <div className="Prog_icon">
                <img src={progic1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={prog2} alt="" />
            <div className="Prog_icon">
                <img src={progic2} alt="" />
                <p>Master's Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={prog3} alt="" />
            <div className="Prog_icon">
                <img src={progic3} alt="" />
                <p>Post Graduate Degree</p>
            </div>
        </div>
    </div>
  )
}

export default program
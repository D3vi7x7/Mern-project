import React, { useRef } from 'react'
import './Testim.css'
import t1 from '../../assets/user-1.png'
import t2 from '../../assets/user-2.png'
import t3 from '../../assets/user-3.png'
import ar from '../../assets/white-arrow.png'

const Testim = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if (tx > -49){
            tx -= 24.5;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0){
            tx += 24.5;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='test'>
        <button className='test_btn_prv' onClick={slideBackward}><img src={ar} alt="" /></button>
        <div className='test_text'>
            <ul ref={slider}>
                <li>
                    <img src={t1} alt="" />
                    <div className='test_info'>
                        <h2>Emma Harrison, USA</h2>
                        <p>"Attending Edusity has been a transformative experience. The supportive faculty, diverse courses, and innovative learning environment have exceeded my expectations. The college not only prioritizes academic excellence but also fosters personal growth and career readiness. I am grateful for the opportunities and connections I've made here. Edusity truly prepares students for success in the real world."
                        </p>
                    </div>
                </li>
                <li>
                    <img src={t2} alt="" />
                    <div className='test_info'>
                        <h2>Chris Jordan, Canada</h2>
                        <p>"Attending Edusity has been a transformative experience. The supportive faculty, diverse courses, and innovative learning environment have exceeded my expectations. The college not only prioritizes academic excellence but also fosters personal growth and career readiness. I am grateful for the opportunities and connections I've made here. Edusity truly prepares students for success in the real world."
                        </p>
                    </div>
                </li>
                <li>
                    <img src={t3} alt="" />
                    <div className='test_info'>
                        <h2>Max Ferguson, New Zealand</h2>
                        <p>"Attending Edusity has been a transformative experience. The supportive faculty, diverse courses, and innovative learning environment have exceeded my expectations. The college not only prioritizes academic excellence but also fosters personal growth and career readiness. I am grateful for the opportunities and connections I've made here. Edusity truly prepares students for success in the real world."
                        </p>
                    </div>
                </li>
                <li>
                    <img src={t3} alt="" />
                    <div className='test_info'>
                        <h2>Max Ferguson, New Zealand</h2>
                        <p>"Attending Edusity has been a transformative experience. The supportive faculty, diverse courses, and innovative learning environment have exceeded my expectations. The college not only prioritizes academic excellence but also fosters personal growth and career readiness. I am grateful for the opportunities and connections I've made here. Edusity truly prepares students for success in the real world."
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <button className='test_btn_nxt' onClick={slideForward}><img src={ar} alt="" /></button>
    </div>
  )
}

export default Testim
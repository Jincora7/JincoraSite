import React from 'react'
import other18 from '../../../assets/other18.png'
import { FaPlus } from "react-icons/fa6";



import "./Page2.css"

function Page2() {
  return (
    <div className="page2-wrapper">
      <div className='page2-left'>
        <h4>Our Benefits </h4>
        <h1>Unlock Revenue Growth for Your Business</h1>

        <div className='page2-inner-list'>
          <span><FaPlus /> Unleashing the Power of AI Automation</span>
          <span><FaPlus /> Business Innovation</span>
          <span><FaPlus /> Different Thinking</span>
          <span><FaPlus /> Focus on People</span>
          <span><FaPlus /> High Standards</span>
        </div>
        <button>Know More</button>
      </div>

      <div className='page2-image-wrap'>
        <img className='page2-img' src={other18} alt="" />
      </div>
    </div>
  )
}

export default Page2
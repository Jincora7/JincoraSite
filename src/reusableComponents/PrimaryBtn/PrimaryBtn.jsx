import "./PrimaryBtn.css"

import React from 'react'
import arrow from "../../assets/arrow-left-1.png"

const PrimaryBtn = ({content}) => {
  return (
    <button className="primary-btn">
        {content}
        <img src={arrow} alt="" />
    </button>
  )
}

export default PrimaryBtn
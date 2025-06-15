import "./PrimaryBtn.css"

import React from 'react'
import arrow from "../../assets/arrow-left-1.png"

const PrimaryBtn = ({ content, onClick, className = '', theme = 'primary', }) => {
  return (
    <button className={`primary-btn ${theme} ${className}` } onClick={onClick}>
      {content}
      <img src={arrow} alt="" />
    </button>
  );
};


export default PrimaryBtn
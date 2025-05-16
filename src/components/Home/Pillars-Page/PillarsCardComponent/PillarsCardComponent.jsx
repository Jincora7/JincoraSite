import "./PillarsCardComponent.css"

import React from 'react'

const PillarsCardComponent = ({ image, heading, para }) => {
  return (
    <div className="pillars-card-component">
      <div className="pillars-card-comp-img">
        <img src={image} alt="" />
      </div>

      <h4>{heading}</h4>

      <p className="pillar-card-comp-para">{para}</p>

    </div>
  )
}

export default PillarsCardComponent
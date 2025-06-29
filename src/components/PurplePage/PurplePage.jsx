import React from 'react'
import './PurplePage.css'

function PurplePage() {
  return (
    <div className="demo-section">
      <h4 >
        Looking to transform your eCommerce presence
        <br />
        into a premium brand experience?
      </h4>
      <button
        onClick={() => window.open(
          "https://calendly.com/admin-jincora/30min"
        )} className="demo-button">Book A Free Demo →</button>
    </div>

  )
}

export default PurplePage

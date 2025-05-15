import "./HeroSection.css"

import React from 'react'
import bulb from "../../../assets/bulb.png"
import maskGrp from "../../../assets/mask-grp.png"

const HeroSection = () => {
    return (
        <div className="hero-section-wrap">
            <div className="hero-section-left">
                <div className="hero-section-left-content">
                    <div className="hero-left-content-heading">
                        <h1>DESIGN DRIVEN</h1>
                        <h1>
                            <img className="hero-section-left-bulb-image" src={bulb} alt="" />
                            CREATIVE STRATEGY
                        </h1>
                        <h1>FOR GROWTH</h1>
                    </div>

                    <hr />

                    <p>Transforming Digital Potential into Powerful Reality.</p>
                </div>
            </div>


            <div className="hero-section-right">
                <img className="hero-section-right-image" src={maskGrp} alt="Creative" />
            </div>
        </div>
    )
}

export default HeroSection
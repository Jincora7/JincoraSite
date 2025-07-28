import "./HeroSection.css"

import React from 'react'
import bulb from "/Home/Hero/bulb.png"
// import maskGrp from "/Home/Hero/mask-grp.png"

const HeroSection = () => {
    return (
        <div className="hero-section-wrap">
            <div className="hero-section-left">
                <div className="hero-section-left-content">
                    <div className="hero-left-content-heading">
                        <h1>DESIGN DRIVEN</h1>
                        <h1>
                            <img className="hero-section-left-bulb-image" src="/Home/Hero/bulb.png" alt="" />
                            CREATIVE STRATEGY
                        </h1>
                        <h1>FOR GROWTH</h1>
                    </div>

                    <hr />

                    <p>Driven by creativity, powered by technology, focused on results.</p>
                </div>
            </div>


            <div className="hero-section-right">
                <img className="hero-section-right-image" src="Home/Hero/mask-grp.png" alt="Creative" />
            </div>
        </div>
    )
}

export default HeroSection
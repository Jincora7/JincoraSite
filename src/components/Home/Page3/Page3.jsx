import React from 'react'
import pillar1 from '../../../assets/1.png'
import pillar2 from '../../../assets/2.png'
import pillar3 from '../../../assets/3.png'
import pillar4 from '../../../assets/4.png'

import "./Page3.css"

function Page3() {
    return (
        <div className='page3-wrapper'>
            <h1 className='page3-heading'> The Pillars of Jincora</h1>
            <h3 className='page3-heading-tagline'>Jincora is built upon four pillars:</h3>

            <div className="page3-para-wrap">
                <p className='page3-para'><span className='page3-para-subheading'>Our Core :</span>
                    Purpose, People, Performance and Partnerships.
                </p>
                <p className='page3-second-para'> These four pillars define who we are and guide everything we do. They shape our decisions, influence our relationships, and drive our commitment to excellence. By embracing these principles, we take responsibility for upholding them in every interaction—with our clients, partners, community, and team. They are the foundation of our culture, inspiring the way we work and the impact we create.</p>
            </div>

            <div className="page3-pillars-wrapper">
                <img src={pillar1} alt="" className="page3-pillars-image" />
                <img src={pillar2} alt="" className="page3-pillars-image" />
                <img src={pillar3} alt="" className="page3-pillars-image" />
                <img src={pillar4} alt="" className="page3-pillars-image" />
            </div>

        </div>
    )
}

export default Page3
import "./PillarsPage.css"

import React from 'react'
import PillarsCardComponent from './PillarsCardComponent/PillarsCardComponent'
// import pillarImage1 from "/Home/PillarsPage/pillar-1.png"
// import pillarImage2 from "/Home/PillarsPage/pillar-2.png"
// import pillarImage3 from "/Home/PillarsPage/pillar-3.png"
// import pillarImage4 from "/Home/PillarsPage/pillar-4.png"
import PrimaryBtn from '../../../reusableComponents/PrimaryBtn/PrimaryBtn'
// import pillar1 from "/Home/PillarsPage/1.png"
// import pillar2 from "/Home/PillarsPage/2.png"
// import pillar3 from "/Home/PillarsPage/3.png"
// import pillar4 from "/Home/PillarsPage/4.png"
import { useNavigate } from "react-router-dom"

const PillarsPage = () => {

    const navigate=useNavigate();

    return (
        <div className="pillars-wrap">
            <div className="pillar-heading">
                <h3>Innovate. Create. Elevate – Where Your Vision Becomes Reality.</h3>
            </div>

            <div className="pillars-card">
                <h3> 
                    Tailored Digital Tools to Fuel Your Success
                </h3>

                <div className="pillars-card-wrap">
                    <PillarsCardComponent image="/Home/PillarsPage/pillar-1.png" heading="Personalized Store Design" para="We create stunning, brand-focused Shopify and WordPress stores designed to engage and convert customers." />

                    <PillarsCardComponent image="/Home/PillarsPage/pillar-2.png" heading="Seamless Development" para="From setup to launch, we build fast, responsive, and scalable websites that perform flawlessly across all devices." />

                    <PillarsCardComponent image="/Home/PillarsPage/pillar-3.png" heading="Sales Optimization" para="We implement proven strategies and features to turn your website visitors into loyal, paying customers." />

                    <PillarsCardComponent image="/Home/PillarsPage/pillar-4.png" heading="Ongoing Support" para="Our team is here post-launch to help with updates, improvements, and expert advice as your business grows." />
                </div>

                <PrimaryBtn onClick={() => navigate("/contact-us")} content="Connect with Sales" />
            </div>
            <div className="full-card">
            <div className="pillars-card-bottom">
                <div className="pillars-card-btm-left">
                    <h3>Innovation Powered By Purpose</h3>
                    <p>Driving meaningful innovation to empower teams, deliver excellence, and build enduring partnerships.</p>
                </div>
                <div className="pillars-card-btm-right">
                    <div className="pillars-card-btm-list">
                        <div className="pillars-card-btm-list-content">
                            <img src="/Home/PillarsPage/1.png" alt="" />
                            <p>Growing stronger together with trust</p>
                        </div>
                    </div>
                    <div className="pillars-card-btm-list">
                        <div className="pillars-card-btm-list-content">
                            <img src="/Home/PillarsPage/2.png" alt="" />
                            <p>Empowering talent to build better</p>
                        </div>
                    </div>
                    <div className="pillars-card-btm-list">
                        <div className="pillars-card-btm-list-content">
                            <img src="/Home/PillarsPage/3.png" alt="" />
                            <p>Delivering results that exceed expectations</p>
                        </div>
                    </div>
                    <div className="pillars-card-btm-list">
                        <div className="pillars-card-btm-list-content">
                            <img src="/Home/PillarsPage/4.png" alt="" />
                            <p>Growing stronger together with trust</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default PillarsPage
import "./Contact.css"
import React from 'react'
import imgLast from "../../assets/home-page-last-image.png"


function Contact() {
    return (
        <div id="contact" className="contact-wrapper">
            <h4 className='contact-yellow-heading'>CONSULT BEFORE YOU START</h4>
            <h1 className='contact-heading'>Want to discuss Your Project</h1>
            <h1 className='contact-heading'>Schedule Your Free Consultation!!</h1>

            <div className="contact-bottom">
                <div className="contact-bottom-form">
                    <h3 className="contact-form-heading">Reserve Your Spot – Let’s Talk!</h3>
                    <form className="contact-form" action="">
                        <input className="contact-input" type="text" name="name" placeholder="Your Name" />
                        <input className="contact-input" type="email" name="email" placeholder="Email" />
                        <input className="contact-input" type="text" name="description" placeholder="Project Description" />
                        <input className="contact-input" type="text" name="date" placeholder="Preferred Date & Time" />
                        <div className="contact-button-group">
                            <button className="contact-submit-btn">Submit</button>
                            {/* <span className="contact-or-text">or</span>
    <button
        type="button"
        className="page 5-submit-btn"
        onClick={() =>
            window.open(
                "https://calendly.com/admin-jincora/30min",
                "_blank"
            )
        }
    >
        Book a Call
    </button> */}
                        </div>

                    </form>
                </div>

                <div className="contact-bottom-image">
                    <img className="contact-bottom-img" src={imgLast} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
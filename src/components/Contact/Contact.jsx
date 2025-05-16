// import "./Contact.css"
// import React from 'react'
// import imgLast from "../../assets/home-page-last-image.png"


// function Contact() {
//     return (
//         <div id="contact" className="contact-wrapper">
//             <h4 className='contact-yellow-heading'>CONSULT BEFORE YOU START</h4>
//             <h1 className='contact-heading'>Want to discuss Your Project</h1>
//             <h1 className='contact-heading'>Schedule Your Free Consultation!!</h1>

//             <div className="contact-bottom">
//                 <div className="contact-bottom-form">
//                     <h3 className="contact-form-heading">Reserve Your Spot – Let’s Talk!</h3>
//                     <form className="contact-form" action="">
//                         <input className="contact-input" type="text" name="name" placeholder="Your Name" />
//                         <input className="contact-input" type="email" name="email" placeholder="Email" />
//                         <input className="contact-input" type="text" name="description" placeholder="Project Description" />
//                         <input className="contact-input" type="text" name="date" placeholder="Preferred Date & Time" />
//                         <div className="contact-button-group">
//                             <button className="contact-submit-btn">Submit</button>
//                             {/* <span className="contact-or-text">or</span>
//     <button
//         type="button"
//         className="page 5-submit-btn"
//         onClick={() =>
//             window.open(
//                 "https://calendly.com/admin-jincora/30min",
//                 "_blank"
//             )
//         }
//     >
//         Book a Call
//     </button> */}
//                         </div>

//                     </form>
//                 </div>

//                 <div className="contact-bottom-image">
//                     <img className="contact-bottom-img" src={imgLast} alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact

// -------------------------------14/05/2025---------------------------------------



import React from 'react';
import './Contact.css';
import contactpage from '../.././assets/contactpage.png'

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Left - Image and Support Box */}
        <div className="contact-left">
          <img
            src={contactpage}
            alt="Support Agent"
            className="contact-image"
          />
          {/* <div className="support-box">
            <div className="support-text">
              <p className="support-title">Support</p>
              <p className="support-subtitle">Drop Us a Line Anytime!</p>
            </div>
            <div className="support-247">24/7</div>
          </div> */}
        </div>

        {/* Right - Contact Form */}
        <div className="contact-right">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtext">
            Have a Project in Mind? We'd Love to Hear From You
          </p>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-col">
                <label>Name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-row fix-layout">
              <div className="form-col">
                <label>Email Address*</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
              
              <div className="form-col">
                <label>Contact Number*</label>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-col">
                <label>Project Description</label>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="form-textarea"
                ></textarea>
              </div>
            </div>
            
            <div className="form-row">
              <button
                type="submit"
                className="form-button"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
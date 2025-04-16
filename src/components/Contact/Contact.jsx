// import React from 'react'

// function Contact() {
//   return (
//     <div>Contact hello</div>
//   )
// }

// export default Contact






import React from 'react';
import './Contact.css';
import contact from '../../assets/contact.png' // Replace with your actual image

const Contact = () => {
  return (
    <div className="contact">
      <p className="contact__subheading">CONSULT BEFORE YOU START</p>
      <h1 className="contact__heading">
        Want to discuss Your Project<br />
        <span className="contact__highlight">Schedule Your Free Consultation!!</span>
      </h1>

      <div className="contact__content">
        <div className="contact__form-box">
          <h2 className="contact__form-title">Reserve Your Spot – Let’s Talk!</h2>
          <form className="contact__form">
            <input type="text" className="contact__input" placeholder="Your Name" required />
            <input type="email" className="contact__input" placeholder="Email" required />
            <input type="text" className="contact__input" placeholder="Project Description" required />
            <input type="text" className="contact__input" placeholder="Preferred Date & Time" required />
            <button type="submit" className="contact__submit-btn">Submit</button>
          </form>
        </div>
        <div className="contact__image-box">
          <img src={contact} alt="Contact Illustration" className="contact__image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import './ContactUsPage.css';
import ScrollToTop from '../common/ScrollToTop';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch("https://formsubmit.co/admin@jincora.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          e.target.reset();
        } else {
          alert("Failed to submit. Try again.");
        }
      })
      .catch(() => alert("Error submitting form"));
  };

  return (
    <>
      <ScrollToTop />
{/** inside return() */}
<div className="contactus-fullscreen">
  <div className="contactus-form-wrapper">
    <h1 className="contactus-title">Contact Us</h1>
    <p className="contactus-subtext">
      Have a Project in Mind? We’d Love to Hear From You
    </p>

    <div className="contactus-form-area">
      {submitted ? (
        <div className="contactus-success-message-wrapper">
          <p className="contactus-success-message">
            Thank you for submitting your details. We will contact you shortly.
          </p>
        </div>
      ) : (
        <form className="contactus-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New Contact Form Submission" />

          <div className="contactus-form-row">
            <div className="contactus-form-col">
              <label>Name*</label>
              <input
                type="text"
                name="Name"
                className="contactus-input"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div className="contactus-form-row">
            <div className="contactus-form-col">
              <label>Email Address*</label>
              <input
                type="email"
                name="Email"
                className="contactus-input"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="contactus-form-col">
              <label>Contact Number*</label>
              <input
                type="text"
                name="Contact Number"
                className="contactus-input"
                placeholder="Enter your number"
                required
              />
            </div>
          </div>

          <div className="contactus-form-row">
            <div className="contactus-form-col">
              <label>Project Description</label>
              <textarea
                name="Project Description"
                className="contactus-textarea"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          <button className="contactus-button" type="submit">
            Submit →
          </button>
        </form>
      )}
    </div>
  </div>
</div>

    </>
  );
}

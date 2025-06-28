

// -------------------------------14/05/2025---------------------------------------



// import React from 'react';
// import './Contact.css';
// import contactpage from '../.././assets/contactpage.png'
// import ScrollToTop from '../common/ScrollToTop'; 

// export default function Contact() {
//   return (
//     <>
//     <ScrollToTop /> 
//     <div className="contact-container">
//       <div className="contact-wrapper">
//         {/* Left - Image and Support Box */}
//         <div className="contact-left">
//           <img
//             src={contactpage}
//             alt="Support Agent"
//             className="contact-image"
//           />

//         </div>

//         {/* Right - Contact Form */}
//         <div className="contact-right">
//           <h2 className="contact-title">Contact Us</h2>
//           <p className="contact-subtext">
//             Have a Project in Mind? We'd Love to Hear From You
//           </p>
//           <form className="contact-form">
//             <div className="form-row">
//               <div className="form-col">
//                 <label>Name*</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="form-input"
//                 />
//               </div>
//             </div>
            
//             <div className="form-row fix-layout">
//               <div className="form-col">
//                 <label>Email Address*</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="form-input"
//                 />
//               </div>
              
//               <div className="form-col">
//                 <label>Contact Number*</label>
//                 <input
//                   type="tel"
//                   placeholder="Enter your number"
//                   className="form-input"
//                 />
//               </div>
//             </div>
            
//             <div className="form-row">
//               <div className="form-col">
//                 <label>Project Description</label>
//                 <textarea
//                   rows="5"
//                   placeholder="Message"
//                   className="form-textarea"
//                 ></textarea>
//               </div>
//             </div>
            
//             <div className="form-row">
//               <button
//                 type="submit"
//                 className="form-button"
//               >
//                 Submit →
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }


// -------------------------testing------------------------------



import React, { useState } from 'react';
import './ContactHome.css';
import contactpage from '/Home/ContactUs/contactpage.png';
import ScrollToTop from '../common/ScrollToTop';
import PurplePage from '../PurplePage/PurplePage';

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
          e.target.reset(); // clear form
        } else {
          alert("Failed to submit. Try again.");
        }
      })
      .catch(() => alert("Error submitting form"));
  };

  return (
    <>
      <ScrollToTop />
      <div className="contact-container">
        <div className="contact-wrapper">
          {/* Left Side */}
          <div className="contact-left">
            <img src={contactpage} alt="Support Agent" className="contact-image" />
          </div>

          {/* Right Side */}
          <div className="contact-right">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtext">
              Have a Project in Mind? We'd Love to Hear From You
            </p>

            {submitted ? (
              <p className="form-success-message"> "Thank you for submitting your details. We will contact you shortly."</p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />

                <div className="form-row">
                  <div className="form-col">
                    <label>Name*</label>
                    <input type="text" name="Name" required placeholder="Enter your name" className="form-input" />
                  </div>
                </div>

                <div className="form-row fix-layout">
                  <div className="form-col">
                    <label>Email Address*</label>
                    <input type="email" name="Email" required placeholder="Enter your email" className="form-input" />
                  </div>
                  <div className="form-col">
                    <label>Contact Number*</label>
                    <input type="tel" name="Contact Number" required placeholder="Enter your number" className="form-input" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col">
                    <label>Project Description</label>
                    <textarea rows="5" name="Project Description" required placeholder="Message" className="form-textarea" />
                  </div>
                </div>

                <div className="form-row">
                  <button type="submit" className="form-button">Submit →</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

    </>
  );
}


// import React, { useState } from 'react';
// import './ContactUsPage.css';
// import ScrollToTop from '../common/ScrollToTop';

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import PurplePage from '../PurplePage/PurplePage.jsx';

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     fetch("https://formsubmit.co/admin@jincora.com", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => {
//         if (response.ok) {
//           setSubmitted(true);
//           e.target.reset();
//         } else {
//           alert("Failed to submit. Try again.");
//         }
//       })
//       .catch(() => alert("Error submitting form"));
//   };


//           const location = useLocation();


//     useEffect(() => {
//         if (location.state?.scrollTo === "top-of-ContactUsPage") {
//           const section = document.getElementById("top-of-ContactUsPage");
//           section?.scrollIntoView({ behavior: "smooth" });
//         }
//       }, [location]);


//   return (
//     <>
//       <ScrollToTop />

// <div  id='top-of-ContactUsPage' className="contactus-fullscreen">
//   <div className="contactus-form-wrapper">
//     <h1 className="contactus-title">Contact Us</h1>
//     <p className="contactus-subtext">
//       Have a Project in Mind? We’d Love to Hear From You
//     </p>

//     <div className="contactus-form-area">
//       {submitted ? (
//         <div className="contactus-success-message-wrapper">
//           <p className="contactus-success-message">
//             Thank you for submitting your details. We will contact you shortly.
//           </p>
//         </div>
//       ) : (
//         <form className="contactus-form" onSubmit={handleSubmit}>
//           <input type="hidden" name="_captcha" value="false" />
//           <input type="hidden" name="_template" value="table" />
//           <input type="hidden" name="_subject" value="New Contact Form Submission" />

//           <div className="contactus-form-row">
//             <div className="contactus-form-col">
//               <label>Name*</label>
//               <input
//                 type="text"
//                 name="Name"
//                 className="contactus-input"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//           </div>

//           <div className="contactus-form-row">
//             <div className="contactus-form-col">
//               <label>Email Address*</label>
//               <input
//                 type="email"
//                 name="Email"
//                 className="contactus-input"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div className="contactus-form-col">
//               <label>Contact Number*</label>
//               <input
//                 type="text"
//                 name="Contact Number"
//                 className="contactus-input"
//                 placeholder="Enter your number"
//                 required
//               />
//             </div>
//           </div>

//           <div className="contactus-form-row">
//             <div className="contactus-form-col">
//               <label>Project Description</label>
//               <textarea
//                 name="Project Description"
//                 className="contactus-textarea"
//                 placeholder="Message"
//                 required
//               ></textarea>
//             </div>
//           </div>

//           <button className="contactus-button" type="submit">
//             Submit →
//           </button>
//         </form>
//       )}
//     </div>
//   </div>
// </div>

//       <PurplePage/>

//     </>
//   );
// }



// ------------------------------------------


import React, { useState } from 'react';
import './ContactUsPage.css';
import ScrollToTop from '../common/ScrollToTop';

import { Helmet } from 'react-helmet-async';




import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PurplePage from '../PurplePage/PurplePage.jsx';

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


          const location = useLocation();


    useEffect(() => {
        if (location.state?.scrollTo === "top-of-ContactUsPage") {
          const section = document.getElementById("top-of-ContactUsPage");
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);





  return (
    <>
      <ScrollToTop />

                  <Helmet>
  <title>Get in Touch | Jincora’s E-commerce & Shopify Experts</title>
  <meta
    name="description"
    content="Have questions or need a custom ecommerce solution? Contact Jincora’s Shopify experts today for professional support, website design, and development services."
  />
  <meta
    name="keywords"
    content="contact Jincora, Shopify experts, ecommerce help, website support, web development contact"
  />
  <link rel="canonical" href="https://www.jincora.com/ContactUsPage" />


</Helmet>




      

<div  id='top-of-ContactUsPage' className="contactus-fullscreen">
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

      <PurplePage/>

    </>
  );
}



// import React, { useState, useEffect } from 'react';
// import './ContactUsPage.css';
// import ScrollToTop from '../common/ScrollToTop';
// import { useLocation } from "react-router-dom";
// import PurplePage from '../PurplePage/PurplePage.jsx';

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);
//   const location = useLocation();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     fetch("https://formsubmit.co/admin@jincora.com", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => {
//         if (response.ok) {
//           setSubmitted(true);
//           e.target.reset();
//         } else {
//           alert("Failed to submit. Try again.");
//         }
//       })
//       .catch(() => alert("Error submitting form"));
//   };

//   // 🔁 Scroll to top of section if needed
//   useEffect(() => {
//     if (location.state?.scrollTo === "top-of-ContactUsPage") {
//       const section = document.getElementById("top-of-ContactUsPage");
//       section?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   // 🧠 Meta tag + title handling (instead of Helmet)
//   useEffect(() => {
//     document.title = "Get in Touch | Jincora’s E-commerce & Shopify Experts";

//     const updateMeta = (name, content) => {
//       let element = document.querySelector(`meta[name="${name}"]`);
//       if (element) {
//         element.setAttribute("content", content);
//       } else {
//         element = document.createElement("meta");
//         element.setAttribute("name", name);
//         element.setAttribute("content", content);
//         document.head.appendChild(element);
//       }
//     };

//     updateMeta("description", "Have questions or need a custom ecommerce solution? Contact Jincora’s Shopify experts today for professional support, website design, and development services.");

//     // Canonical link (optional)
//     let link = document.querySelector("link[rel='canonical']");
//     if (!link) {
//       link = document.createElement("link");
//       link.setAttribute("rel", "canonical");
//       document.head.appendChild(link);
//     }
//     link.setAttribute("href", "https://www.jincora.com/ContactUs");
//   }, []);

//   return (
//     <>
//       <ScrollToTop />
//       <div id='top-of-ContactUsPage' className="contactus-fullscreen">
//         <div className="contactus-form-wrapper">
//           <h1 className="contactus-title">Contact Us</h1>
//           <p className="contactus-subtext">
//             Have a Project in Mind? We’d Love to Hear From You
//           </p>

//           <div className="contactus-form-area">
//             {submitted ? (
//               <div className="contactus-success-message-wrapper">
//                 <p className="contactus-success-message">
//                   Thank you for submitting your details. We will contact you shortly.
//                 </p>
//               </div>
//             ) : (
//               <form className="contactus-form" onSubmit={handleSubmit}>
//                 <input type="hidden" name="_captcha" value="false" />
//                 <input type="hidden" name="_template" value="table" />
//                 <input type="hidden" name="_subject" value="New Contact Form Submission" />

//                 <div className="contactus-form-row">
//                   <div className="contactus-form-col">
//                     <label>Name*</label>
//                     <input
//                       type="text"
//                       name="Name"
//                       className="contactus-input"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="contactus-form-row">
//                   <div className="contactus-form-col">
//                     <label>Email Address*</label>
//                     <input
//                       type="email"
//                       name="Email"
//                       className="contactus-input"
//                       placeholder="Enter your email"
//                       required
//                     />
//                   </div>
//                   <div className="contactus-form-col">
//                     <label>Contact Number*</label>
//                     <input
//                       type="text"
//                       name="Contact Number"
//                       className="contactus-input"
//                       placeholder="Enter your number"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="contactus-form-row">
//                   <div className="contactus-form-col">
//                     <label>Project Description</label>
//                     <textarea
//                       name="Project Description"
//                       className="contactus-textarea"
//                       placeholder="Message"
//                       required
//                     ></textarea>
//                   </div>
//                 </div>

//                 <button className="contactus-button" type="submit">
//                   Submit →
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//       <PurplePage />
//     </>
//   );
// }








  // <title>Scale Your E-commerce Business with Jincora Solutions</title>
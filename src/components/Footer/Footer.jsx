// import React, { useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { IoLogoInstagram } from "react-icons/io";
// import { FaPinterest, FaLinkedin, FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { useLocation, useNavigate } from 'react-router-dom';

// import logo from "../../assets/logo.png";
// import "./Footer.css";

// function Footer() {

//   const location = useLocation();
//   const navigate = useNavigate();

//   const scrollToHome = () => {
//     if (location.pathname === "/") {
//       // Already on home, scroll
//       const section = document.getElementById("Home");
//       section?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       // Navigate to home with scroll flag
//       navigate("/", { state: { scrollTo: "Home" } });
//     }
//   }

//   return (
//     <div id="AboutUs" className="footer-wrapper">
//       <div className="footer-first">
//         <div>
//           <Link className="footer-logo" to="/" onClick={scrollToHome}>
//             <img src={logo} alt="Jincora Logo" />
//           </Link>
//         </div>


//         <div className="footer-services-contacts">
//         <div>
//           <h5>Services</h5>
//           <ul>
//             <li>SEO</li>
//             <li>SMM</li>
//             <li>Ecommerce</li>
//             <li>AI Automation</li>
//             <li>Graphic Design</li>
//             <li>Web Development</li>
//           </ul>
//         </div>

//         <div>
//           <h5>Contacts</h5>
//           <ul>
//             <li>Blog</li>
//             <li>Portfolio</li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="https://calendly.com/admin-jincora/30min" target='_blank'>Book a Call</Link></li>
//             <li>Become Our Partner</li>
//             <li>admin@jincora.com</li>
//           </ul>
//         </div>
//         </div>
        


//         <div className="subscribe">
//           <h5>Subscribe</h5>
//           <div className="inner-sub">
//             <h3>Get News & Updates</h3>
//             <hr />
//             <p>
//               Our expertise, as well as our passion for web design,sets us apart from other agencies.
//             </p>
//             <div className="footer-icons">
//               <Link to="https://www.instagram.com/jincora_techsolutions/" target='_blank'><IoLogoInstagram size={30} /></Link>
//               <Link to="#" target='_blank'><FaPinterest size={30} /></Link>
//               <Link to="https://www.linkedin.com/company/jincora/" target='_blank'><FaLinkedin size={30} /></Link>
//               <Link to="https://x.com/jincora_tech?t=4AaCk2vw335gmdpOgU0iiw&s=09" target='_blank'><FaXTwitter size={30} /></Link>
//               <Link to="https://www.facebook.com/share/1AH9TC8zj8/" target='_blank'><FaFacebook size={30} /></Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <hr />

//       <div className="footer-second">
//         <h4>Copyright © 2025 Jincora.com All Rights Reserved</h4>
//         <div>
//           <Link to="/terms-and-conditions">Terms and Conditions</Link>
//           <Link to="/privacy-policy">Privacy Policy</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;



// -----------------------------------


// import React, { useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { IoLogoInstagram } from "react-icons/io";
// import { FaPinterest, FaLinkedin, FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { useLocation, useNavigate } from 'react-router-dom';

// import logo from "../../assets/logo.png";
// import "./Footer.css";

// function Footer() {

//   const location = useLocation();
//   const navigate = useNavigate();

//   const scrollToHome = () => {
//     if (location.pathname === "/") {
//       // Already on home, scroll
//       const section = document.getElementById("Home");
//       section?.scrollIntoView({ behavior: "smooth" });
//     } else {
//       // Navigate to home with scroll flag
//       navigate("/", { state: { scrollTo: "Home" } });
//     }
//   }

//   return (
//     <>

//     <div className="demo-section">
//   <h2 className="demo-title">
//     Looking to transform your eCommerce presence<br />
//     into a premium brand experience?
//   </h2>
//   <button className="demo-button">Book A Free Demo →</button>
//   </div>
   


//     <div id="AboutUs" className="footer-wrapper">
//       <div className="footer-first">
//         <div>
//           <Link className="footer-logo" to="/" onClick={scrollToHome}>
//             <img src={logo} alt="Jincora Logo" />
//           </Link>
//         </div>


//         <div className="footer-services-contacts">
//         <div>
//           <h5>Services</h5>
//           <ul>
//             <li>Search Engine Optimization</li>
//             <li>Social Media Marketing</li>
//             <li>Ecommerce</li>
//             <li>AI Automation</li>
//             <li>Graphic Design</li>
//             <li>Web Development</li>
//           </ul>
//         </div>

//         <div>
//           <h5>Contacts</h5>
//           <ul>
//             <li>Blog</li>
//             <li>Portfolio</li>
//             <li><Link to="/about">About Us</Link></li>
//             <li><Link to="https://calendly.com/admin-jincora/30min" target='_blank'>Book a Call</Link></li>
//             <li>Become Our Partner</li>
//             <li>admin@jincora.com</li>
//           </ul>
//         </div>
//         </div>
        


//         <div className="subscribe">
//           <h5>Subscribe</h5>
//           <div className="inner-sub">
//             <h3>Get News & Updates</h3>
//             <hr />
//             <p>
//               Our expertise, as well as our passion for web design,sets us apart from other agencies.
//             </p>
//             <div className="footer-icons">
//               <Link to="https://www.instagram.com/jincora_techsolutions/" target='_blank'><IoLogoInstagram size={30} /></Link>
//               <Link to="#" target='_blank'><FaPinterest size={30} /></Link>
//               <Link to="https://www.linkedin.com/company/jincora/" target='_blank'><FaLinkedin size={30} /></Link>
//               <Link to="https://x.com/jincora_tech?t=4AaCk2vw335gmdpOgU0iiw&s=09" target='_blank'><FaXTwitter size={30} /></Link>
//               <Link to="https://www.facebook.com/share/1AH9TC8zj8/" target='_blank'><FaFacebook size={30} /></Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <hr />

//       <div className="footer-second">
//         <p>Copyright © 2025 Jincora.com All Rights Reserved</p>
//         <div>
//           <Link to="/terms-and-conditions">Terms and Conditions</Link>
//           <Link to="/privacy-policy">Privacy Policy</Link>
//         </div>
//       </div>
//     </div>
//     </>
   
//   );
// }


// export default Footer;


// ---------------------------------

import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterest, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

import logo from "../../assets/logo.png";
import ScrollToTop from '../common/ScrollToTop';
import "./Footer.css";

function Footer() {

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToHome = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("Home");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "Home" } });
    }
  }

    const scrollToPartner = () => {
        if (location.pathname === "/partner") {
            // Already on home, scroll
            const section = document.getElementById("top-of-partner");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home with scroll flag
            navigate("/partner", { state: { scrollTo: "top-of-partner" } });
        }
    };

        const scrollToTermsAndConditions = () => {
        if (location.pathname === "/terms-and-conditions") {
            // Already on home, scroll
            const section = document.getElementById("top-of-TermsAndConditions");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home with scroll flag
            navigate("/terms-and-conditions", { state: { scrollTo: "top-of-TermsAndConditions" } });
        }
    };

            const scrollToPrivacyPolicy = () => {
        if (location.pathname === "/privacy-policy") {
            // Already on home, scroll
            const section = document.getElementById("top-of-privacy-policy");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home with scroll flag
            navigate("/privacy-policy", { state: { scrollTo: "top-of-privacy-policy" } });
        }
    };

            const scrollToContactUsPage = () => {
        if (location.pathname === "/ContactUsPage") {
            // Already on home, scroll
            const section = document.getElementById("top-of-ContactUsPage");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home with scroll flag
            navigate("/ContactUsPage", { state: { scrollTo: "top-of-ContactUsPage" } });
        }
    };



                const scrollToBlogListing = () => {
        if (location.pathname === "/BlogListing") {
            // Already on home, scroll
            const section = document.getElementById("top-of-BlogListing");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home with scroll flag
            navigate("/BlogListing", { state: { scrollTo: "top-of-BlogListing" } });
        }
    };


                const scrollToFAQ = () => {
        if (location.pathname === "/FAQ") {
            // Already on home, scroll
            const section = document.getElementById("top-of-FAQ");
            section?.scrollIntoView({ behavior: "smooth" });
        } else {
            // Navigate to home with scroll flag
            navigate("/FAQ", { state: { scrollTo: "top-of-FAQ" } });
        }
    };

  return (
      <>
      <ScrollToTop/>
          {/* <div className="demo-section">
              <h2 className="demo-title">
                  Looking to transform your eCommerce presence
                  <br />
                  into a premium brand experience?
              </h2>
              <button className="demo-button">Book A Free Demo →</button>
          </div> */}

          <div className="footer-wrapper">
              <div className="footer-first">
                  {/* Left Section */}
                  <div className="footer-left">
                      <Link
                          className="footer-logo"
                          to="/"
                          onClick={scrollToHome}
                      >
                          <img src={logo} alt="Jincora Logo" />
                      </Link>
                      <p className="footer-description">
                          From launch to growth — Jincora builds eCommerce
                          success, one store at a time.
                      </p>
                      <div className="footer-icons">
                          <Link
                              to="https://www.linkedin.com/company/jincora/"
                              target="_blank"
                          >
                              <FaLinkedin size={24} />
                          </Link>
                          <Link
                              to="https://www.instagram.com/jincora_techsolutions/"
                              target="_blank"
                          >
                              <IoLogoInstagram size={24} />
                          </Link>
                          <Link to="#" target="_blank">
                              <FaPinterest size={24} />
                          </Link>
                          <Link
                              to="https://www.facebook.com/share/1AH9TC8zj8/"
                              target="_blank"
                          >
                              <FaFacebook size={24} />
                          </Link>
                          <Link
                              to="https://x.com/jincora_tech?t=4AaCk2vw335gmdpOgU0iiw&s=09"
                              target="_blank"
                          >
                              <FaXTwitter size={24} />
                          </Link>
                      </div>
                  </div>

                  {/* Right Columns */}
                  <div className="footer-services-contacts">
                      {/* Grouped Resources + Support */}
                      <div className="footer-top-sections">
                          {/* Resources */}
                          <div className="footer-section">
                              <h5>Resources</h5>
                              <ul>
                                  {/* <li>Help Guide</li> */}
                                  {/* <li>FAQ</li> */}
                                  <li><Link to="#" onClick={scrollToFAQ}>FAQ</Link></li>
                                  <li>Portfolio</li>
                                  <li><Link to="#" onClick={scrollToPartner} >Partner</Link></li>
                                  <li><Link to="#" onClick={scrollToBlogListing}>Blog</Link></li>
                                  {/* <li><Link to="/BlogDetails">BlogDetails</Link></li> */}
                              </ul>
                          </div>

                          {/* Support */}
                          <div className="footer-section">
                              <h5>Support</h5>
                              <ul>
                                  <li> <Link to="#" onClick={scrollToContactUsPage}>Contact Us</Link></li>
                                  <li>Email Us</li>
                                  <li>
                                      <Link to="/about">About Us</Link>
                                  </li>
                                  <li>
                                      <Link to="#" onClick={scrollToPrivacyPolicy}>
                                          Privacy Policy
                                      </Link>
                                  </li>
                                  <li>
                                      <Link to="#" onClick={scrollToTermsAndConditions}>
                                          Terms and Conditions
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>

                      {/* Services (separate for layout stacking) */}
                      <div className="footer-section services-alone">
                          <h5>Services</h5>
                          <ul>
                              <li>Ecommerce</li>
                              <li>Graphic Design</li>
                              <li>Web Development</li>
                              <li>Search Engine Optimization</li>
                              <li>Social Media Marketing</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <hr />

              <div className="footer-second">
                  <p>Copyright © 2025 Jincora.com All Rights Reserved</p>
              </div>
          </div>
      </>
  );
}

export default Footer;

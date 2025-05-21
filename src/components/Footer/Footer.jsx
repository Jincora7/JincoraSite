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


import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterest, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToHome = () => {
    if (location.pathname === "/") {
      // Already on home, scroll
      const section = document.getElementById("Home");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home with scroll flag
      navigate("/", { state: { scrollTo: "Home" } });
    }
  }

  return (
    <>

    <div className="demo-section">
  <h2 className="demo-title">
    Looking to transform your eCommerce presence<br />
    into a premium brand experience?
  </h2>
  <button className="demo-button">Book A Free Demo →</button>
  </div>
   


    <div id="AboutUs" className="footer-wrapper">
      <div className="footer-first">
        <div>
          <Link className="footer-logo" to="/" onClick={scrollToHome}>
            <img src={logo} alt="Jincora Logo" />
          </Link>
        </div>


        <div className="footer-services-contacts">
        <div>
          <h5>Services</h5>
          <ul>
            <li>SEO</li>
            <li>SMM</li>
            <li>Ecommerce</li>
            <li>AI Automation</li>
            <li>Graphic Design</li>
            <li>Web Development</li>
          </ul>
        </div>

        <div>
          <h5>Contacts</h5>
          <ul>
            <li>Blog</li>
            <li>Portfolio</li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="https://calendly.com/admin-jincora/30min" target='_blank'>Book a Call</Link></li>
            <li>Become Our Partner</li>
            <li>admin@jincora.com</li>
          </ul>
        </div>
        </div>
        


        <div className="subscribe">
          <h5>Subscribe</h5>
          <div className="inner-sub">
            <h3>Get News & Updates</h3>
            <hr />
            <p>
              Our expertise, as well as our passion for web design,sets us apart from other agencies.
            </p>
            <div className="footer-icons">
              <Link to="https://www.instagram.com/jincora_techsolutions/" target='_blank'><IoLogoInstagram size={30} /></Link>
              <Link to="#" target='_blank'><FaPinterest size={30} /></Link>
              <Link to="https://www.linkedin.com/company/jincora/" target='_blank'><FaLinkedin size={30} /></Link>
              <Link to="https://x.com/jincora_tech?t=4AaCk2vw335gmdpOgU0iiw&s=09" target='_blank'><FaXTwitter size={30} /></Link>
              <Link to="https://www.facebook.com/share/1AH9TC8zj8/" target='_blank'><FaFacebook size={30} /></Link>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-second">
        <p>Copyright © 2025 Jincora.com All Rights Reserved</p>
        <div>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </div>
    </>
   
  );
}


export default Footer;
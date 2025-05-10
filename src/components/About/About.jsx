// import "./About.css"

// import React from 'react'

// function About() {
//   return (
//     <div className="about-wrapper">
//       <div className="about-section">
//         <h1>About Us </h1>

//         <div className="about-content">
//           <p>
//             At <strong>Jincora</strong>, we specialize in helping businesses build, scale, and optimize their online presence. As a team of passionate eCommerce and web development experts, we bring over <strong>10 years of collective experience</strong> in delivering high-impact digital solutions tailored to your business goals.
//           </p>

//           <div className="about-content-list">
//             <h3>Our Mission</h3>

//             <p>
//               To empower merchants and brands with affordable, efficient, and results-driven digital services that accelerate growth and simplify the complexities of online business.
//             </p>
//           </div>


//           <div className="about-content-list">
//             <h3>What We Do</h3>

//             <p>
//               We offer a comprehensive suite of services, including:
//             </p>

//             <ul>
//               <li><strong>Ecommerce Development – </strong>Shopify & WooCommerce setup, design, and customization</li>
//               <li><strong>Website Development – </strong>Core technologies & WordPress solutions</li>
//               <li><strong>Platform Migration – </strong>Smooth transitions (e.g., WooCommerce to Shopify)</li>
//               <li><strong>Web App Development – </strong>Scalable, functional applications for business use</li>
//               <li><strong>Custom Projects – </strong>Built from the ground up to match your unique requirements</li>
//               <li><strong>Graphic Designing – </strong>Visuals that match your brand identity</li>
//               <li><strong>Social Media Marketing – </strong>Strategies that engage and convert</li>
//               <li><strong>Search Engine Optimization (SEO) – </strong>Improve visibility and ranking</li>
//               <li><strong>Data Analytics – </strong>Actionable insights for better decision-making</li>
//               <li><strong>Information Services – </strong>Tailored technical and business support</li>
//             </ul>
//           </div>

//           <div className="about-content-list">
//             <h3>Why Choose Jincora?</h3>

//             <ul>
//               <li> <strong>Affordable & Transparent Pricing – </strong>No hidden fees or surprises</li>
//               <li> <strong>Fast Turnarounds – </strong>We respect your timelines</li>
//               <li> <strong>Detail-Oriented Team – </strong>We sweat the small stuff, so you don’t have to</li>
//               <li> <strong>Smooth Communication – </strong>Clear, consistent, and always responsive</li>
//               <li> <strong>Client-First Approach – </strong>Your success is our priority</li>
//             </ul>
//           </div>

//           <div className="about-content-list">
//             <p>Whether you're a startup launching your first store or an established brand looking to optimize, <strong>Jincora</strong> is here to support you every step of the way.</p>

//             <p>📩 <strong>Contact us at:</strong> admin@jincora.com            </p>
//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default About



// ----------------------------

import "./About.css"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react'

function About() {

  const location = useLocation();


  useEffect(() => {
    if (location.state?.scrollToTop) {
      const topEl = document.getElementById("top-of-about");
      topEl?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div id="top-of-about" className="about-wrapper">
      <div className="about-section">
        <h1>About Us </h1>

        <div className="about-content">
          <p>
            At <strong>Jincora</strong>, we specialize in helping businesses build, scale, and optimize their online presence. As a team of passionate eCommerce and web development experts, we bring over <strong>10 years of collective experience</strong> in delivering high-impact digital solutions tailored to your business goals.
          </p>

          <div className="about-content-list">
            <h3>Our Mission</h3>

            <p>
              To empower merchants and brands with affordable, efficient, and results-driven digital services that accelerate growth and simplify the complexities of online business.
            </p>
          </div>


          <div className="about-content-list">
            <h3>What We Do</h3>

            <p>
              We offer a comprehensive suite of services, including:
            </p>

            <ul>
              <li><strong>Ecommerce Development – </strong>Shopify & WooCommerce setup, design, and customization</li>
              <li><strong>Website Development – </strong>Core technologies & WordPress solutions</li>
              <li><strong>Platform Migration – </strong>Smooth transitions (e.g., WooCommerce to Shopify)</li>
              <li><strong>Web App Development – </strong>Scalable, functional applications for business use</li>
              <li><strong>Custom Projects – </strong>Built from the ground up to match your unique requirements</li>
              <li><strong>Graphic Designing – </strong>Visuals that match your brand identity</li>
              <li><strong>Social Media Marketing – </strong>Strategies that engage and convert</li>
              <li><strong>Search Engine Optimization (SEO) – </strong>Improve visibility and ranking</li>
              <li><strong>Data Analytics – </strong>Actionable insights for better decision-making</li>
              <li><strong>Information Services – </strong>Tailored technical and business support</li>
            </ul>
          </div>

          <div className="about-content-list">
            <h3>Why Choose Jincora?</h3>

            <ul>
              <li> <strong>Affordable & Transparent Pricing – </strong>No hidden fees or surprises</li>
              <li> <strong>Fast Turnarounds – </strong>We respect your timelines</li>
              <li> <strong>Detail-Oriented Team – </strong>We sweat the small stuff, so you don’t have to</li>
              <li> <strong>Smooth Communication – </strong>Clear, consistent, and always responsive</li>
              <li> <strong>Client-First Approach – </strong>Your success is our priority</li>
            </ul>
          </div>

          <div className="about-content-list">
            <p>Whether you're a startup launching your first store or an established brand looking to optimize, <strong>Jincora</strong> is here to support you every step of the way.</p>

            <p>📩 <strong>Contact us at:</strong> admin@jincora.com            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default About
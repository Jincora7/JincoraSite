
// import React from 'react';
// import "./About.css";
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import ScrollToTop from '../common/ScrollToTop';
// import AboutUs from "../../assets/Group5830.png";


// function About() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state?.scrollToTop) {
//       const topEl = document.getElementById("top-of-about");
//       topEl?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [location]);

//   return (
//     <>
//       <ScrollToTop />
//       <div id="top-of-about" className="about-wrapper">
        
//         {/* Hero Section */}
//         <div className="hero-section">
//           <div className="hero-content">
//             <span className="hero-subtitle">About Us</span>
//             <h1 className="hero-title">Welcome to Jincora</h1>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="main-content-section">
//           <div className="content-container">
            
//            {/* Company Overview with Image */}
// <div className="overview-container">
//   <div className="overview-inner">
//     <div className="overview-text">
//       <h3>We help eCommerce brands grow smarter, sell faster, and retain more customers.</h3>
//       <h6>
//         At Jincora, we understand that sustained growth comes from delivering exceptional digital experiences that drive 
//         real business results in digital marketing and conversion optimization to build comprehensive solutions that 
//         not only help you reach new audiences but also create lasting relationships with their customers. 
//         Whether you're handling your online campaigns, we're focused on transforming your online digital presence into a 
//         scalable, profitable business.
//       </h6>
//     </div>
//     <div className="overview-image">
//       <img src={AboutUs} alt="Team collaboration meeting" className="team-meeting-img" />
//     </div>
//   </div>
// </div>




//             {/* Value Proposition Section */}
//        {/* Value Proposition Section */}
//         <div className="value-section">
//           <h2 className="section-title">
//             Maximize Customer Value & Drive Steady <br />Growth
//           </h2>
//           <p className="section-description">
//             At Jincora, we understand that sustainable growth isn’t just about acquiring new customers—it’s about making every customer count.
//             That’s why we focus on strategies and solutions designed to increase customer lifetime value (CLV) while creating predictable, long-term revenue streams for your business.<br /><br />

//             Our team combines data-driven insights, personalized user experiences, and smart automation to help you build deeper customer relationships.
//             From loyalty-focused eCommerce design and seamless reordering flows to strategic email marketing and subscription-based models, we craft solutions that keep your customers coming back.<br /><br />

//             With our expertise in custom CRM development, AI marketing solutions, and performance-driven optimization,
//             you’ll gain the tools to better understand your audience, engage them at the right time, and boost average order value over time.<br /><br />

//             By aligning technology with business goals, we not only improve operational efficiency but also help you forecast revenue with greater accuracy.
//             Whether you're scaling an online store or fine-tuning customer journeys, Jincora ensures your digital infrastructure is built to retain, convert, and grow.<br /><br />

//             Let’s move beyond one-time sales. Together, we’ll unlock lasting loyalty and predictable performance—backed by personalized IT solutions that evolve with your business.
//           </p>
//         </div>

//           </div>
//         </div>


    

//       </div>
//     </>
//   );
// }

// export default About;


// -------------------------------------


import React from "react";
import "./About.css";



import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../common/ScrollToTop';


import AboutUs from "/AboutUs/Group5830.png";
import PurplePage from "../PurplePage/PurplePage.jsx";



import AboutUsList1 from '/AboutUs/AboutUs-List-1.png'
import AboutUsList2 from '/AboutUs/AboutUs-List-2.png'
import AboutUsList3 from '/AboutUs/AboutUs-List-3.png'
import AboutUsList4 from '/AboutUs/AboutUs-List-4.png'

// AboutUs/AboutUs-List-1.png
const SectionLayout = () => {


    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTop) {
      const topEl = document.getElementById("top-of-about");
      topEl?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);


  return (
    <>
   
      <div id="top-of-about" className="about-wrapper">
        
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <span className="hero-subtitle">About Us</span>
            <h1 className="hero-title">Welcome to Jincora</h1>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="main-content-section">
          <div className="content-container">
            
           {/* Company Overview with Image */}
<div className="overview-container">
  <div className="overview-inner">
    <div className="overview-text">
      <h3>We help eCommerce brands grow smarter, sell faster, and retain more customers.</h3>
      <h6>
        At Jincora, we understand that sustained growth comes from delivering exceptional digital experiences that drive 
        real business results in digital marketing and conversion optimization to build comprehensive solutions that 
        not only help you reach new audiences but also create lasting relationships with their customers. 
        Whether you're handling your online campaigns, we're focused on transforming your online digital presence into a 
        scalable, profitable business.
      </h6>
    </div>
    <div className="overview-image">
      <img src={AboutUs} alt="Team collaboration meeting" className="team-meeting-img" />
    </div>
  </div>
</div>




            {/* Value Proposition Section */}
       {/* Value Proposition Section */}
 

          </div>
        </div>


    

      </div>




    <div className="section-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          Maximize Customer Value & Drive Steady Growth
        </h2>
      </div>

      {/* Section 1 - Normal (image on right) */}
      <div className="section-block">
        <div className="section-text">
          <h3>Turning Customer Relationships into Revenue Opportunities</h3>
          <p>
            At Jincora, we understand that sustainable growth goes beyond 
            customer acquisition-it's about maximizing the value of every 
            relationship. Our approach prioritizes customer lifetime value 
            (CLV), empowering brands to create consistent, long-term 
            revenue streams. By designing strategies that focus on retention 
            and loyalty, we help you shift from transactional sales to 
            meaningful, recurring customer engagement.
          </p>
        </div>
        <img src={AboutUsList1} alt="VR user 1" className="section-image" />
      </div>

      {/* Section 2 - Reversed (image on left) */}
      <div className="section-block reversed">
      <img src={AboutUsList2} alt="UI hand" className="section-image" />
        <div className="section-text">
          <h3>Creating Personalized Experiences That Keep Customers Coming Back</h3>
          <p>
            We specialize in building loyalty through highly tallored digital 
            experiences. Our team integrates data-driven Insights with intelligent 
            automation to deliver personalized eCommerce designs, frictionless 
            reordering flows, strategic email sequences, and compelling subscription
            models. The result? A seamless and satisfying customar joumey that 
            encourages repeat purchases and long-term brand allegiance.
          </p>
        </div>
      </div>

      {/* Section 3 - Normal (image on right) */}
      <div className="section-block">
        <div className="section-text">
          <h3>Empowering Brands with Smart Tools and Intelligent Optimization</h3>
          <p>
           Our deep expertise in custom CRM development, Al-powered marketing,
           and conversion-driven optimization enables your business to better 
           understand and influence customer behavior. We provide the tools you 
           need to engage your audience with precision, drive higher average order 
           values, and respond to user behavior in real-time-building momentum 
           that accelerates over time.
          </p>
        </div>
        <img src={AboutUsList3} alt="VR user 2" className="section-image" />
      </div>

      {/* Section 4 - Reversed (image on left) */}
      <div className="section-block reversed">
        <img src={AboutUsList4} alt="VR user 3" className="section-image" />
        <div className="section-text">
          <h3>Aligning Technology with Business Goals for Scalable Success</h3>
          <p>
           Technology should support your business vision not complicate it. At 
           Jincors, we focus on aligning your digital infrastructure with your 
           growth objectives. From operational efficiency to revenue forecasting, 
           our solutions help you scale with confidence. Whether you're expanding 
           an online storefront or refining retention strategies, we equip you with
          the foundation to retain, convert, and grow effectively.
          </p>
        </div>
      </div>
    </div>
    <PurplePage/>
    </>
  );
};

export default SectionLayout;
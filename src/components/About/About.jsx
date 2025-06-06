
import React from 'react';
import "./About.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from '../common/ScrollToTop';
import AboutUs from "../../assets/Group5830.png";


function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTop) {
      const topEl = document.getElementById("top-of-about");
      topEl?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
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
        <div className="value-section">
          <h2 className="section-title">
            Maximize Customer Value & Drive Steady <br />Growth
          </h2>
          <p className="section-description">
            At Jincora, we understand that sustainable growth isn’t just about acquiring new customers—it’s about making every customer count.
            That’s why we focus on strategies and solutions designed to increase customer lifetime value (CLV) while creating predictable, long-term revenue streams for your business.<br /><br />

            Our team combines data-driven insights, personalized user experiences, and smart automation to help you build deeper customer relationships.
            From loyalty-focused eCommerce design and seamless reordering flows to strategic email marketing and subscription-based models, we craft solutions that keep your customers coming back.<br /><br />

            With our expertise in custom CRM development, AI marketing solutions, and performance-driven optimization,
            you’ll gain the tools to better understand your audience, engage them at the right time, and boost average order value over time.<br /><br />

            By aligning technology with business goals, we not only improve operational efficiency but also help you forecast revenue with greater accuracy.
            Whether you're scaling an online store or fine-tuning customer journeys, Jincora ensures your digital infrastructure is built to retain, convert, and grow.<br /><br />

            Let’s move beyond one-time sales. Together, we’ll unlock lasting loyalty and predictable performance—backed by personalized IT solutions that evolve with your business.
          </p>
        </div>

          </div>
        </div>


    

      </div>
    </>
  );
}

export default About;

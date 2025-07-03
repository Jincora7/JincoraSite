import React from 'react'
import HeroSection from './Hero-Section/HeroSection.jsx'
import PillarsPage from './Pillars-Page/PillarsPage.jsx'
import GrowthSection from './GrowthSection/GrowthSection.jsx'
import ContactHome from '../ContactHome/ContactHome.jsx'
import ScrollToTop from '../common/ScrollToTop.jsx' 
import StickycardsSections from './Home-Cards/StickycardsSection.jsx'
import PurplePage from '../PurplePage/PurplePage.jsx'

import { Helmet } from 'react-helmet-async';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Home.css';

function Home() {

    const location = useLocation();


    useEffect(() => {
        if (location.state?.scrollTo === "top-of-home") {
          const section = document.getElementById("top-of-home");
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);



  return (
    <>

              <Helmet>
                <title>Home Jincora | Empowering E-commerce Business to Grow</title>
                <meta
                  name="description"
                  content="Have questions or need a custom ecommerce solution? Contact Jincora’s Shopify experts today for professional support, website design, and development services."
                />
                <meta
                  name="keywords"
                  content="contact Jincora, Shopify experts, ecommerce help, website support, web development contact"
                />
                
        
        
              </Helmet>
    <div id="top-of-home" />
    <div className="home-wrapper">
      
      <ScrollToTop />
      <HeroSection/>
      
      <PillarsPage/>
      <StickycardsSections/>
      <GrowthSection/>
      <ContactHome/>
      <PurplePage/>
    </div>
    </>
  )
}

export default Home
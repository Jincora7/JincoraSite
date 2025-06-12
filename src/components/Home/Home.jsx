import React from 'react'
import HeroSection from './Hero-Section/HeroSection.jsx'
import PillarsPage from './Pillars-Page/PillarsPage.jsx'
import GrowthSection from './GrowthSection/GrowthSection.jsx'
import Contact from '../Contact/Contact.jsx'
import ScrollToTop from '../common/ScrollToTop.jsx' 
import StickycardsSections from './Home-Cards/StickycardsSection.jsx'
import PurplePage from './PurplePageHome/PurplePageHome.jsx'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
    
    <div className="home-wrapper">
      <div id="top-of-home" />
      <ScrollToTop />
      <HeroSection/>
      <PillarsPage/>
      <StickycardsSections/>
      <GrowthSection/>
      <Contact/>
      <PurplePage/>
    </div>
    </>
  )
}

export default Home
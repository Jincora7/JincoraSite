import React from 'react'
import HomeCards from './Home-Cards/HomeCards.jsx'
import cardImage from "../../assets/website-development.png"
import HeroSection from './Hero-Section/HeroSection.jsx'
import PillarsPage from './Pillars-Page/PillarsPage.jsx'
import GrowthSection from './GrowthSection/GrowthSection.jsx'
import Contact from '../Contact/Contact.jsx'
import ScrollToTop from '../common/ScrollToTop.jsx' 
import StickycardsSections from './Home-Cards/StickycardsSection.jsx'

function Home() {
  return (
    <div className="home-wrapper">
      <ScrollToTop />
      <HeroSection/>
      <PillarsPage/>
      <StickycardsSections/>
      <GrowthSection/>
      <Contact/>
    </div>
  )
}

export default Home
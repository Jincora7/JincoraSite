import React from 'react'
import HeroSection from './Hero-Section/HeroSection.jsx'
import PillarsPage from './Pillars-Page/PillarsPage.jsx'
import GrowthSection from './GrowthSection/GrowthSection.jsx'
import Contact from '../Contact/Contact.jsx'
import ScrollToTop from '../common/ScrollToTop.jsx' 
import StickycardsSections from './Home-Cards/StickycardsSection.jsx'
import PurplePage from './PurplePageHome/PurplePageHome.jsx'

function Home() {
  return (
    <div className="home-wrapper">
      <ScrollToTop />
      <HeroSection/>
      <PillarsPage/>
      <StickycardsSections/>
      <GrowthSection/>
      <Contact/>
      <PurplePage/>
    </div>
  )
}

export default Home
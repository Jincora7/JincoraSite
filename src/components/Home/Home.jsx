import React from 'react'
import HomeCards from './Home-Cards/HomeCards.jsx'
import cardImage from "../../assets/website-development.png"
import HeroSection from './Hero-Section/HeroSection.jsx'
import PillarsPage from './Pillars-Page/PillarsPage.jsx'

function Home() {
  return (
    <div className="home-wrapper">
      <HeroSection/>
      <PillarsPage/>
      <HomeCards bgColor="#2C0E4A" image={cardImage} heading="Website Design and Development" para="Jincora crafts stunning, functional websites tailored to your business, combining cutting-edge design with seamless functionality to elevate your online presence." />
    </div>
  )
}

export default Home
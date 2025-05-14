import React from 'react'
import HomeCards from './Home-Cards/HomeCards.jsx'
import cardImage from "../../assets/website-development.png"

function Home() {
  return (
    <div className="home-wrapper">
      <HomeCards bgColor="#2C0E4A" image={cardImage} heading="Website Design and Development" para="Jincora crafts stunning, functional websites tailored to your business, combining cutting-edge design with seamless functionality to elevate your online presence." />
    </div>
  )
}

export default Home
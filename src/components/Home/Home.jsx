import React from 'react'
import other07 from "../../assets/other07.png"
import bulb from "../../assets/bulb.png"



import "./Home.css"

function Home() {
  return (
    <div className="home-wrapper">

      <div className='home-inner-div'>
        <div>
          <div className='headings'>
            <h1>HIGH END</h1>
            <h1 className="outlined-heading"> <img className='bulb' src={bulb} alt="Lightbulb symbolizing creative idea" /> CREATIVE </h1>
            <h1>FIRM</h1>
          </div>

          <div className='get-started'>
            <p>Transforming Digital Potential <br />into Powerful Reality.</p>
            <button>Get Started</button>
          </div>
        </div>

        <div>
          <img className='home-image' src={other07} alt="" />
        </div>
      </div>

      <div className='home-bottom-heading'>
        <p>"Innovate. Create. Elevate – Your Success, Our Commitment."</p>
      </div>

    </div>
  )
}

export default Home
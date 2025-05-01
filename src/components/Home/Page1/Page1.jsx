// import React from 'react'
// import other07 from "../../../assets/other07.png"
// import bulb from "../../../assets/bulb.png"



// import "./Page1.css"

// function Home() {
//   return (
//     <div  className="page1-wrapper">

//       <div className='page1-inner-div'>
//         <div>
//           <div className='headings'>
//             <h1>HIGH END</h1>
//             <h1 className="outlined-heading"> <img className='bulb' src={bulb} alt="Lightbulb symbolizing creative idea" /> CREATIVE </h1>
//             <h1>FIRM</h1>
//           </div>

//           <div className='get-started'>
//             <p>Transforming Digital Potential <br />into Powerful Reality.</p>
//             <button>Get Started</button>
//           </div>
//         </div>

//         <div className='page1-img-wrapper'>
//           <img className='page1-image' src={other07} alt="" />
//         </div>
//       </div>

//       <div className='page1-bottom-heading'>
//         <p>"Innovate. Create. Elevate – Your Success, Our Commitment."</p>
//       </div>

//     </div>
//   )
// }

// export default Home


// -----------------------------------------



import React, { useEffect } from 'react';
import other07 from "../../../assets/other07.png"
import bulb from "../../../assets/bulb.png"

import { useLocation } from 'react-router-dom';



import "./Page1.css"

function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "Home") {
      const section = document.getElementById("Home");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div id="Home"  className="page1-wrapper">

      <div className='page1-inner-div'>
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

        <div className='page1-img-wrapper'>
          <img className='page1-image' src={other07} alt="" />
        </div>
      </div>

      <div className='page1-bottom-heading'>
        <p>"Innovate. Create. Elevate – Your Success, Our Commitment."</p>
      </div>

    </div>
  )
}

export default Home
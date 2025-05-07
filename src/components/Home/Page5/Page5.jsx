// import "./Page5.css"
// import React from 'react'
// import imgLast from "../../../assets/home-page-last-image.png"


// function Page5() {
//     return (
//         <div id="contact" className="page5-wrapper">
//             <h4 className='page5-yellow-heading'>CONSULT BEFORE YOU START</h4>
//             <h1 className='page5-heading'>Want to discuss Your Project</h1>
//             <h1 className='page5-heading'>Schedule Your Free Consultation!!</h1>

//             <div className="page5-bottom">
//                 <div className="page5-bottom-form">
//                     <h3 className="page5-form-heading">Reserve Your Spot – Let’s Talk!</h3>
//                     <form className="page5-form" action="">
//                         <input className="page5-input" type="text" name="name" placeholder="Your Name" />
//                         <input className="page5-input" type="email" name="email" placeholder="Email" />
//                         <input className="page5-input" type="text" name="description" placeholder="Project Description" />
//                         <input className="page5-input" type="text" name="date" placeholder="Preferred Date & Time" />
//                         <button className="page5-submit-btn">Submit</button>
//                     </form>
//                 </div>

//                 <div className="page5-bottom-image">
//                     <img className="page5-bottom-img" src={imgLast} alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Page5




import "./Page5.css"
import React from 'react'
import imgLast from "../../../assets/home-page-last-image.png"


function Page5() {
    return (
        <div id="contact" className="page5-wrapper">
            <h4 className='page5-yellow-heading'>CONSULT BEFORE YOU START</h4>
            <h1 className='page5-heading'>Want to discuss Your Project</h1>
            <h1 className='page5-heading'>Schedule Your Free Consultation!!</h1>

            <div className="page5-bottom">
                <div className="page5-bottom-form">
                    <h3 className="page5-form-heading">Reserve Your Spot – Let’s Talk!</h3>
                    <form className="page5-form" action="">
                        <input className="page5-input" type="text" name="name" placeholder="Your Name" />
                        <input className="page5-input" type="email" name="email" placeholder="Email" />
                        <input className="page5-input" type="text" name="description" placeholder="Project Description" />
                        <input className="page5-input" type="text" name="date" placeholder="Preferred Date & Time" />
                        <div className="page5-button-group">
    <button className="page5-submit-btn">Submit</button>
    {/* <span className="page5-or-text">or</span>
    <button
        type="button"
        className="page 5-submit-btn"
        onClick={() =>
            window.open(
                "https://calendly.com/admin-jincora/30min",
                "_blank"
            )
        }
    >
        Book a Call
    </button> */}
</div>

                    </form>
                </div>

                <div className="page5-bottom-image">
                    <img className="page5-bottom-img" src={imgLast} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Page5
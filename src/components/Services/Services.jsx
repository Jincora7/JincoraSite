// import "./Services.css"
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// import React from 'react'
// import { FaPlus } from "react-icons/fa6";
// import ListComponent from "./ListComponent.jsx";

// import list1 from "../../assets/services-list-1.png"
// import list2 from "../../assets/services-list-2.png"
// import list3 from "../../assets/services-list-3.png"
// import list4 from "../../assets/services-list-4.png"
// import list5 from "../../assets/services-list-5.png"

// function Services() {

//   const location = useLocation();


//     useEffect(() => {
//         if (location.state?.scrollTo === "top-of-services") {
//           const section = document.getElementById("top-of-services");
//           section?.scrollIntoView({ behavior: "smooth" });
//         }
//       }, [location]);

//   const listItems = [
//     {
//       imageUrl: list1,
//       heading: "Expertise and Industry Knowledge",
//       content: "Our team of experienced professionals has a deep understanding of AI technologies and a track record of successful projects.",
//       linkUrl: "#"
//     },
//     {
//       imageUrl: list2,
//       heading: "Customized Solutions",
//       content: "We tailor our AI automation services to meet your specific business needs, ensuring optimal results and maximum ROI.",
//       linkUrl: "#"
//     },
//     {
//       imageUrl: list3,
//       heading: "Seamless Integration",
//       content: "Our solutions seamlessly integrate with your existing systems and processes, minimizing disruptions and maximizing efficiency.",
//       linkUrl: "#"
//     },
//     {
//       imageUrl: list4,
//       heading: "Data Security",
//       content: "We prioritize the security and confidentiality of your data, implementing robust measures to protect your information. Your privacy is our top priority, ensuring safe and seamless operations.",
//       linkUrl: "#"
//     },
//     {
//       imageUrl: list5,
//       heading: "Exceptional Support",
//       content: "We provide dedicated support and maintenance services to ensure the smooth functioning of our AI automation solutions. Our team is always ready to assist you with updates, troubleshooting, and optimizations.",
//       linkUrl: "#"
//     }
//   ]

//   return (
//     <>
    
    
//       <div id="top-of-services" className="services-wrapper">
        
//         <div className="services-page1">
          
//           <p>Your</p>
//           <h1>Ai Automation Agency</h1>
//           <p>Automate your business and workflows effortlessly with our no-code automation solutions. Boost efficiency, drive growth, and cut costs—seamlessly and affordably!</p>

//           {/* <button>Book a call</button> */}

//                 <button
//                     className="calendly-button"
//                     onClick={() =>
//                         window.open(
//                             "https://calendly.com/admin-jincora/30min",
//                             "_blank"
//                         )
//                     }
//                 >
//                     Book a Call
//                 </button>

//         </div>

//         <div className="services-page2">
//           <span>
//             Automation Of Workflow & Business
//           </span>

//           <div className="services-page2-btm">
//             <div className="services-page2-btm-left">
//               <h1>
//                 With Jincora ‘s
//               </h1>
//               <h1>
//                 Advance Top-Tier
//               </h1>
//               <h1>
//                 Solutions
//               </h1>
//               <p>
//                 Jincora empowers companies with no-code AI automation solutions, seamlessly integrating advanced features into existing workflows. By leveraging platforms like Jincora, Zapier, Make/Integromat, Jincora, and GMB, Jincora streamlines data management, marketing campaigns, and customer service operations. With a user-friendly interface and seamless interoperability, businesses can harness AI-driven automation effortlessly—enhancing efficiency, reducing complexity, and gaining a competitive edge in today’s fast-paced market.

//               </p>

//               <button>Contact Now !</button>
//             </div>

//             <div className="services-page2-btm-right">
//               <ul>
//                 <li><FaPlus className="list-cross" /> E-commerce Development <br />(Shopify, Magento, WordPress)</li>
//                 <li><FaPlus className="list-cross" /> Custom Web Development</li>
//                 <li><FaPlus className="list-cross" /> E-commerce Consultancy & Strategy</li>
//                 <li><FaPlus className="list-cross" /> Website Design & UI/UX Optimization</li>
//                 <li><FaPlus className="list-cross" /> Third-Party Integrations & Automation</li>
//                 <li><FaPlus className="list-cross" /> Performance & SEO Optimization</li>
//                 <li><FaPlus className="list-cross" /> Ongoing Maintenance & Support</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="services-page3">
//           <h1>
//             Why Choose Us
//           </h1>
//           <p className="services-page3-para">
//             With our team of experts and deep understanding of AI technologies, we provide cutting-edge AI automation services that transform businesses across industries.
//           </p>

//           <div className="services-page3-list-container">
//             {listItems.map((index, key) => (
//               <ListComponent key={key} imageUrl={index.imageUrl} heading={index.heading} content={index.content} linkUrl={index.linkUrl} />
//             ))}
//           </div>
//         </div>
//       </div>  
      
//     </>
//   )
// }

// export default Services




// ---------------------------------

import "./Services.css"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from 'react'


import Hero2 from "./Hero2/Hero2.jsx";

import PricingPlans from "./PricingPlans/PricingPlans.jsx";
import PillarsCardComponent from "../Home/Pillars-Page/PillarsCardComponent/PillarsCardComponent.jsx";
import servicelist1 from '/Service/service-list-1.png'
import servicelist2 from '/Service/service-list-2.png'
import servicelist3 from '/Service/service-list-3.png'
import servicelist4 from '/Service/service-list-4.png'
import PrimaryBtn from '../../reusableComponents/PrimaryBtn/PrimaryBtn'
import IgniteGrowth from "./IgniteGrowth/IgniteGrowth.jsx";
import PurplePage from "../PurplePage/PurplePage.jsx";
// import pillar1 from "../../../assets/1.png"
// import pillar2 from "../../../assets/2.png"
// import pillar3 from "../../../assets/3.png"
// import pillar4 from "../../../assets/4.png"



function Services() {

  const location = useLocation();


    useEffect(() => {
        if (location.state?.scrollTo === "top-of-services") {
          const section = document.getElementById("top-of-services");
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);

  

  return (
    <>
    <div id="top-of-services">
      <Hero2 />

    <div className="pillars-wrap">
                <div className="pillars-card">
                <h3 className="pillars-card-para">
                    Why Jincora Is Your Store’s Trusted Growth Partner
                </h3>

                <div className="pillars-card-wrap">
                    <PillarsCardComponent image={servicelist1} heading="Custom Shopify Development" para="We build tailored, conversion-focused Shopify stores that align with your brand and business goals." />

                    <PillarsCardComponent image={servicelist2} heading="Platform Migration Services" para="Seamlessly move from WooCommerce, Magento, or legacy platforms to Shopify — with zero downtime or data loss." />

                    <PillarsCardComponent image={servicelist3} heading="Performance Optimization" para="From speed tuning to UX enhancements, we improve your store’s performance to drive sales and retention." />

                    <PillarsCardComponent image={servicelist4} heading="Ongoing Support & Scaling" para="We don’t just launch — we help you grow. Get continuous support, feature upgrades, and strategic scaling." />
                </div>

               
            </div>
    </div>

    <PricingPlans />

    <IgniteGrowth/>

    <PurplePage/>


    </div>
      
    </>
  )
}

export default Services
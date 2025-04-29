// import "./Page4.css"
// import React from 'react'

// import Page4C1 from './Page4Comp/Page4C1.jsx'
// import Page4C2 from './Page4Comp/Page4C2.jsx'

// import c1 from "../../../assets/c1.png"
// import c2 from "../../../assets/c2.png"
// import c3 from "../../../assets/c3.png"
// import c4 from "../../../assets/c4.png"
// import c5 from "../../../assets/c5.png"
// import c6 from "../../../assets/c6.png"

// function Page4() {
//     return (
//         <div className="page4-wrapper">
//             <h4 className='page4-yellow-heading'>What We Offer</h4>
//             <h1 className='page4-heading'>Giving Your Business Some Great Ideas</h1>

//             <div className="page4-services-wrap">
//                 <Page4C1 head1="Ai Automations" head2="Website Design & Development" para1="Jincora empowers businesses with AI automation, delivering efficient chatbots for seamless interactions and streamlined operations." para2="Jincora crafts stunning, functional websites tailored to your business, combining cutting-edge design with seamless functionality to elevate your online presence." image={c1} />

//                 <Page4C2 image1={c2} image2={c3} heading="Ecommerce All In One" para="Jincora builds powerful eCommerce solutions, combining sleek design and seamless functionality to drive sales and enhance your online shopping experience." />

//                 <Page4C1 head1="Social Media Management" head2="Search Engine Optimization" para1="Jincora transforms your online presence with expert social media management, driving engagement, growth, and seamless brand connections." para2="Jincora boosts your online visibility with expert SEO services, driving traffic, improving rankings, and maximizing your business growth." image={c4} />

//                 <Page4C2 image1={c5} image2={c6} heading="Graphic Designing" para="Jincora creates stunning visuals with expert graphic design services, bringing your brand to life through impactful and memorable designs." />
//             </div>
//         </div>
//     )
// }

// export default Page4



// -------------------------------------------



import "./Page4.css";
import React from 'react';

import Page4C1 from './Page4Comp/Page4C1.jsx';
import Page4C2 from './Page4Comp/Page4C2.jsx';

import c1 from "../../../assets/c1.png";
import c2 from "../../../assets/c2.png";
import c3 from "../../../assets/c3.png";
import c4 from "../../../assets/c4.png";
import c5 from "../../../assets/c5.png";
import c6 from "../../../assets/c6.png";

function Page4() {
    return (
        <div className="page4-wrapper">
            <h4 className='page4-yellow-heading'>What We Offer</h4>
            <h1 className='page4-heading'>Giving Your Business Some Great Ideas</h1>

            <div className="page4-services-wrap">
                <div className="page4-service-box">
                    <Page4C1
                        head1="Ai Automations"
                        head2="Website Design & Development"
                        para1="Jincora empowers businesses with AI automation, delivering efficient chatbots for seamless interactions and streamlined operations."
                        para2="Jincora crafts stunning, functional websites tailored to your business, combining cutting-edge design with seamless functionality to elevate your online presence."
                        image={c1}
                    />
                </div>

                <div className="page4-service-box">
                    <Page4C2
                        image1={c2}
                        image2={c3}
                        heading="Ecommerce All In One"
                        para="Jincora builds powerful eCommerce solutions, combining sleek design and seamless functionality to drive sales and enhance your online shopping experience."
                    />
                </div>

                <div className="page4-service-box">
                    <Page4C1
                        head1="Social Media Management"
                        head2="Search Engine Optimization"
                        para1="Jincora transforms your online presence with expert social media management, driving engagement, growth, and seamless brand connections."
                        para2="Jincora boosts your online visibility with expert SEO services, driving traffic, improving rankings, and maximizing your business growth."
                        image={c4}
                    />
                </div>

                <div className="page4-service-box">
                    <Page4C2
                        image1={c5}
                        image2={c6}
                        heading="Graphic Designing"
                        para="Jincora creates stunning visuals with expert graphic design services, bringing your brand to life through impactful and memorable designs."
                    />
                </div>
            </div>
        </div>
    );
}

export default Page4;

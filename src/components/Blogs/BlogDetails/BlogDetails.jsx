// import React from "react";
// import "./BlogDetails.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';

// import BlogDetailsImg1 from '../../../assets/BlogDetailsImg1.png';
// import BlogDetailsImg2 from '../../../assets/BlogDetailsImg2.png';
// import BlogDetailsImg3 from '../../../assets/BlogDetailsImg3.png';
// import BlogDetailsImg4 from '../../../assets/BlogDetailsImg4.png';

// const BlogDetails = () => {
//   return (
//     <div className="blogpage-wrapper">
//       <img src={BlogDetailsImg1} alt="Hero" className="blogpage-hero-img" />

//       <div className="blogpage-content">
//         <h1 className="blogpage-main-title">
//           How to Speed Up Your Shopify Store for Better Conversions
//         </h1>

//         <div className="blogpage-meta-tags">
//           <span className="blogpage-tag">Best practices</span>
//           <span className="blogpage-tag">How to</span>
//           <span className="blogpage-tag">Industry experts</span>
//         </div>
//         <div className="blogpage-publish-date">August 29, 2024</div>

//         <p className="blogpage-intro">
//           A fast-loading Shopify store isn’t just nice to have—it’s essential for keeping visitors engaged
//           and converting them into customers. Slow websites frustrate users, increase bounce rates, and hurt your SEO rankings.
//           By optimizing images, minimizing apps, and using a lightweight theme, you can significantly improve your store’s speed.
//           Faster load times lead to smoother shopping experiences, higher trust, and ultimately, better sales.
//         </p>

//         <h2 className="blogpage-section-heading">Why Speed Matters More Than Ever</h2>
//         <p className="blogpage-section-text">
//           Today’s online shoppers expect instant results. If your store takes more than a few seconds to load, you risk losing them to a competitor.
//           Site speed directly impacts user satisfaction and plays a major role in checkout completion rates.
//           Investing in speed optimization is one of the simplest ways to boost conversions and retain more customers.
//         </p>

//         <div className="blogpage-image-sidebar-section">
//           <img src={BlogDetailsImg2} alt="Performance" className="blogpage-content-image" />

//           <div className="blogpage-sidebar">
//             <p className="blogpage-sidebar-title">Share</p>
//             <div className="blogpage-social-icons">
//               <i className="fab fa-linkedin-in"></i>
//               <i className="fab fa-facebook-f"></i>
//               <i className="fab fa-instagram"></i>
//               <i className="fab fa-x-twitter"></i>
//             </div>

//             <input className="blogpage-newsletter-input" type="email" placeholder="Email" />

//             <div className="blogpage-cta-box">
//               <h3>Prep Your Store for Peak Sales</h3>
//               <p>
//                 Unlock <span>Up to 50% Off</span> on Yearly Plans <br />
//                 Join Today and Save Big!
//               </p>
//             </div>
//           </div>
//         </div>

//         <h2 className="blogpage-section-heading">Quick Fixes, Big Impact</h2>
//         <p className="blogpage-section-text">
//           You don’t need a full redesign to improve performance. Simple tweaks like enabling lazy loading,
//           removing unused apps, and using performance-tested themes can make a noticeable difference.
//           These small changes add up, reducing friction in the buying process and helping customers complete their purchases with ease.
//         </p>

//         <h2 className="blogpage-related-title">You might also like…</h2>
//         <div className="blogpage-related-posts">
//           <div className="blogpage-related-card">
//             <img src={BlogDetailsImg3} alt="Related 1" />
//             <div className="blogpage-card-content">
//               <div className="blogpage-meta-tags">
//                 <span className="blogpage-tag">Company updates</span>
//                 <span className="blogpage-tag">Featured</span>
//                 <span className="blogpage-tag">Industry experts</span>
//               </div>
//               <p>How to Speed Up Your Shopify Store for Better Conversions</p>
//               <div className="blogpage-publish-date">September 27, 2024</div>
//             </div>
//           </div>

//           <div className="blogpage-related-card">
//             <img src={BlogDetailsImg4} alt="Related 2" />
//             <div className="blogpage-card-content">
//               <div className="blogpage-meta-tags">
//                 <span className="blogpage-tag">Company updates</span>
//                 <span className="blogpage-tag">Featured</span>
//                 <span className="blogpage-tag">Industry experts</span>
//               </div>
//               <p>Why Your Shopify Store Needs a Custom Design in 2025</p>
//               <div className="blogpage-publish-date">September 6, 2024</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;



// ------------------------------------



import React from "react";
import "./BlogDetails.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import BlogDetailsImg1 from '/BlogDetails/BlogDetailsImg1.png';
import BlogDetailsImg2 from '/BlogDetails/BlogDetailsImg2.png';
import BlogDetailsImg3 from '/BlogDetails/BlogDetailsImg3.png';
import BlogDetailsImg4 from '/BlogDetails/BlogDetailsImg4.png';

const BlogDetails = () => {
  return (
    <div className="blogpage-wrapper">
      <img src={BlogDetailsImg1} alt="Hero" className="blogpage-hero-img" />

      <div className="blogpage-content">
        <h1 className="blogpage-main-title">
          How to Speed Up Your Shopify Store for Better <br /> Conversions
        </h1>

        <div className="blogpage-meta-tags">
          <span className="blogpage-tag">Best practices</span>
          <span className="blogpage-tag">How to</span>
          <span className="blogpage-tag">Industry experts</span>
        </div>
        <div className="blogpage-publish-date">August 29, 2024</div>

        <div className="blogpage-content-with-sidebar">
          <div className="blogpage-main-content">
            <p className="blogpage-intro">
              A fast-loading Shopify store isn’t just nice to have—it’s essential for keeping visitors engaged
              and converting them into customers. Slow websites frustrate users, increase bounce rates, and hurt your SEO rankings.
              By optimizing images, minimizing apps, and using a lightweight theme, you can significantly improve your store’s speed.
              Faster load times lead to smoother shopping experiences, higher trust, and ultimately, better sales.
            </p>

            <h2 className="blogpage-section-heading">Why Speed Matters More Than Ever</h2>
            <p className="blogpage-section-text">
              Today’s online shoppers expect instant results. If your store takes more than a few seconds to load, you risk losing them to a competitor.
              Site speed directly impacts user satisfaction and plays a major role in checkout completion rates.
              Investing in speed optimization is one of the simplest ways to boost conversions and retain more customers.
            </p>
          </div>

          <div className="blogpage-sidebar">
            <p className="blogpage-sidebar-title">Share</p>
            <div className="blogpage-social-icons">
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-x-twitter"></i>
            </div>
            <p className="letter">Newsletter</p>
            <div className="blogpage-newsletter-wrapper">
              <input className="blogpage-newsletter-input" type="email" placeholder="Email" />
              <i className="fas fa-arrow-right newsletter-arrow-icon"></i>
            </div>

          </div>
        </div>

        <div className="blogpage-image-cta-section">
          <img src={BlogDetailsImg2} alt="Performance" className="blogpage-content-image" />
        <div className="blogpage-cta-box">
          <h3>
            Prep Your Store for <br />
            <span className="highlight-line">Peak Sales</span>
          </h3>
          <p>
            Unlock <span>Up to 50% Off</span> on Yearly Plans <br />
            <span className="highlight-line">Join Today and Save Big!</span>
          </p>
        </div>

        </div>


        <div className="blogpage-main-content blogpage-followup-section">
          <h2 className="blogpage-section-heading">Quick Fixes, Big Impact</h2>
          <p className="blogpage-section-text">
           
          You don’t need a full redesign to improve performance. Simple tweaks like enabling lazy loading,
          removing unused apps, and using performance-tested themes can make a noticeable difference.
          These small changes add up, reducing friction in the buying process and helping customers complete their purchases with ease.
          </p>
        </div>

       

        <h2 className="blogpage-related-title">You might also like…</h2>
        <div className="blogpage-related-posts">
          {[BlogDetailsImg3, BlogDetailsImg4].map((imgSrc, index) => (
            <div className="blogpage-related-card" key={index}>
              <img src={imgSrc} alt={`Related ${index + 1}`}  className="blogpage-related-image-rounded" />
              <div className="blogpage-card-content">
                <div className="blogpage-meta-tags">
                  <span className="blogpage-tag">Company updates</span>
                  <span className="blogpage-tag">Featured</span>
                  <span className="blogpage-tag">Industry experts</span>
                </div>
                <p className="blogpage-text">
                  {index === 0
                    ? "How to Speed Up Your Shopify Store for Better Conversions"
                    : "Why Your Shopify Store Needs a Custom Design in 2025"}
                </p>
                <div className="blogpage-publish-date">
                  {index === 0 ? "September 27, 2024" : "September 6, 2024"}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogDetails;
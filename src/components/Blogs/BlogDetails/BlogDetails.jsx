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

  const dets={
    mainHeading:"How Shopify CMS Helped Small Businesses Grow Fast and Sell More Online",
    tags:["Best practices","How to","Industry experts"],
    blogDate:"August 29, 2024",
    mainPara:"Running an online business wasn’t always as smooth as it is today. Back when we started Jincora IT Solution, we worked with small business owners who struggled with clunky websites, slow page loads, and poor sales. Many were overwhelmed by the idea of setting up an eCommerce store from scratch. That’s when we found our secret weapon—Shopify CMS. Over the years, as a Shopify expert agency, we’ve helped countless brands build beautiful, high-converting online stores using this powerful platform. Shopify makes it possible for even non-technical business owners to launch fast, attract traffic, and scale sales—all from a single dashboard. From drag-and-drop design tools to built-in SEO features, Shopify removes complexity and adds results. If you’ve ever dreamed of running your own online store but didn’t know where to start, this story is for you. Let’s explore how Shopify CMS can make your eCommerce journey smooth and successful.",
    head1:"Why Shopify CMS Is Perfect for Small Business Owners",
    para1:"Before working with Shopify, most of our clients used outdated website builders or tried juggling multiple plugins and payment tools. Shopify CMS changed that completely. As an eCommerce CMS, Shopify combines everything—store design, payment gateways, shipping tools, and marketing features—all under one roof. Small business owners no longer need coding knowledge or big budgets to create professional-looking online stores. With pre-designed themes and intuitive editing tools, setting up a storefront takes just a few hours. It’s fully mobile-optimized, meaning your customers enjoy a smooth shopping experience across all devices. Plus, Shopify’s secure hosting and built-in SSL certificates mean you never have to worry about downtime or payment security. As a Shopify development agency, we’ve seen firsthand how Shopify empowers small businesses to move fast and start selling in days, not weeks.",
    head2:"Shopify SEO Features That Bring More Visitors Organically",
    para2:"Launching a store is just the first step—getting traffic is where the real challenge begins. Thankfully, Shopify offers built-in SEO features that help your products rank on Google without expensive SEO tools. From editable meta titles and descriptions to automatic sitemap generation and SEO-friendly URLs, Shopify covers all the basics. We help clients optimize product pages with long-tail keywords like “handmade leather wallets” or “organic skincare products.” Shopify also allows easy image optimization by adding alt text, which boosts your chances in Google Image Search. Thanks to fast loading speeds and mobile responsiveness, Shopify sites tend to rank better than generic website builders. For small businesses competing in crowded markets, these SEO tools make a big difference in driving free, organic traffic. At Jincora, we provide ongoing Shopify SEO services to help clients climb the Google rankings month after month.",
    head3:"Customizable Shopify Themes Make Branding Super Easy",
    para3:"Your store’s design is often the first impression for online shoppers. With Shopify, you get access to dozens of professional, customizable themes tailored for different industries. Whether you’re selling fashion, electronics, handmade goods, or health products, there’s a theme that fits. At Jincora, we help clients select and customize Shopify themes to match their brand voice, color palette, and audience expectations. From homepage banners to product galleries, Shopify’s drag-and-drop editor makes customization simple—even for beginners. You don’t need a graphic designer or developer to tweak layouts, fonts, and color schemes. Plus, every theme is mobile-responsive and built for fast load times. This ensures your shoppers have a seamless browsing experience on both desktop and mobile devices. For clients needing more advanced designs, we offer custom Shopify theme development for unique, standout storefronts that convert visitors into buyers.",
    head4:"Shopify App Store Unlocks New Growth Opportunities",
    para4:"One major reason we recommend Shopify CMS to small businesses is the Shopify App Store. With over 8,000 apps available, you can extend your store’s functionality in just a few clicks. Need email marketing? Install Klaviyo. Want customer reviews? Use Judge.me. Thinking about loyalty programs or live chat? There are apps for that too. As a Shopify expert agency, we help clients choose the right apps based on their business goals—whether that’s increasing average order value, improving customer retention, or automating marketing. Many apps come with free plans, perfect for businesses just starting out. The best part? No coding is required. These apps integrate seamlessly into your store’s backend, allowing you to scale and optimize without technical headaches. From upselling tools to abandoned cart recovery apps, the Shopify App Store makes it easy to turn casual browsers into loyal customers.",
    head5:"Shopify Support and Scalability for Long-Term Success",
    para5:"Small businesses grow, and Shopify grows with them. Whether you’re handling 10 orders a month or 1,000, Shopify’s infrastructure supports your scaling needs. Plans are affordable, starting low and increasing as your requirements grow. At Jincora, we’ve helped businesses migrate smoothly from basic Shopify plans to Shopify Plus as their revenue exploded. Shopify’s 24/7 customer support ensures you’re never stuck when issues arise. Live chat, email, and phone support are available anytime. Plus, the Shopify Help Center, forums, and video tutorials provide DIY solutions for quick fixes. Our agency often partners with Shopify merchants for long-term maintenance, SEO optimization, and conversion rate improvements as they scale. With global payment options, multi-currency support, and advanced reporting tools, Shopify CMS stays reliable at every growth stage. For small business owners dreaming of long-term online success, Shopify remains our number one recommendation.",
  }

  return (
    <div className="blogpage-wrapper">
      <img src={BlogDetailsImg1} alt="Hero" className="blogpage-hero-img" />

      <div className="blogpage-content">
        <h1 className="blogpage-main-title">
          {/* Main Heading */}
          {dets.mainHeading}
        </h1>

        {/* Tags */}
        <div className="blogpage-meta-tags">
          {dets.tags.map((tag,index)=>(
            <span key={index} className="blogpage-tag">{tag}</span>
          ))}
        </div>

        {/* Blog Date */}
        <div className="blogpage-publish-date">{dets.blogDate}</div>

        {/* Content div */}
        <div className="blogpage-content-with-sidebar">
          <div className="blogpage-main-content">
            {/* Main Paragraph */}
            <p className="blogpage-intro">
              {dets.mainPara}
            </p>

            {/* Heading 1 & Para 1 */}
            <h2 className="blogpage-section-heading">{dets.head1}</h2>
            <p className="blogpage-section-text">
              {dets.para1}
            </p>


            {/* Heading 2 & Para 2 */}
            <h2 className="blogpage-section-heading">{dets.head2}</h2>
            <p className="blogpage-section-text">
              {dets.para2}
            </p>

            {/* Heading 3 & Para 3 */}
            <h2 className="blogpage-section-heading">{dets.head3}</h2>
            <p className="blogpage-section-text">
              {dets.para3}
            </p>

            {/* Heading 4 & Para 4 */}
            <h2 className="blogpage-section-heading">{dets.head4}</h2>
            <p className="blogpage-section-text">
              {dets.para4}
            </p>

            {/* Heading 5 & Para 5 */}
            <h2 className="blogpage-section-heading">{dets.head5}</h2>
            <p className="blogpage-section-text">
              {dets.para5}
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
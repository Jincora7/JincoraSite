import React from "react";
import "./BlogDetails.css";

import BlogDetailsImg1 from '../../../assets/BlogDetailsImg1.png'
import BlogDetailsImg2 from '../../../assets/BlogDetailsImg2.png'
import BlogDetailsImg3 from '../../../assets/BlogDetailsImg3.png'
import BlogDetailsImg4 from '../../../assets/BlogDetailsImg4.png'

const BlogPage = () => {
  return (
    <div className="blog-wrapper">
      <img src={BlogDetailsImg1} alt="Hero" className="hero-img" />

      <div className="blog-content">
        <h1 className="main-title">
          How to Speed Up Your Shopify Store for Better Conversions
        </h1>

        <div className="meta-tags">
          <span className="tag">Best practices</span>
          <span className="tag">How to</span>
          <span className="tag">Industry experts</span>
        </div>
        <div className="publish-date">August 29, 2024</div>

        <p className="intro">
          A fast-loading Shopify store isn’t just nice to have—it’s essential for keeping visitors engaged
          and converting them into customers. Slow websites frustrate users, increase bounce rates, and hurt your SEO rankings.
          By optimizing images, minimizing apps, and using a lightweight theme, you can significantly improve your store’s speed.
          Faster load times lead to smoother shopping experiences, higher trust, and ultimately, better sales.
        </p>

        <h2 className="section-heading">Why Speed Matters More Than Ever</h2>
        <p className="section-text">
          Today’s online shoppers expect instant results. If your store takes more than a few seconds to load, you risk losing them to a competitor.
          Site speed directly impacts user satisfaction and plays a major role in checkout completion rates.
          Investing in speed optimization is one of the simplest ways to boost conversions and retain more customers.
        </p>

        <div className="image-sidebar-section">
          <img src={BlogDetailsImg2} alt="Performance" className="content-image" />

          <div className="sidebar">
            <p className="sidebar-title">Share</p>
            <div className="social-icons">
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-x-twitter"></i>
            </div>

            <input className="newsletter-input" type="email" placeholder="Email" />

            <div className="cta-box">
              <h3>Prep Your Store for Peak Sales</h3>
              <p>
                Unlock <span>Up to 50% Off</span> on Yearly Plans <br />
                Join Today and Save Big!
              </p>
            </div>
          </div>
        </div>

        <h2 className="section-heading">Quick Fixes, Big Impact</h2>
        <p className="section-text">
          You don’t need a full redesign to improve performance. Simple tweaks like enabling lazy loading,
          removing unused apps, and using performance-tested themes can make a noticeable difference.
          These small changes add up, reducing friction in the buying process and helping customers complete their purchases with ease.
        </p>

        <h2 className="related-title">You might also like…</h2>
        <div className="related-posts">
          <div className="related-card">
            <img src={BlogDetailsImg3} alt="Related 1" />
            <div className="card-content">
              <div className="meta-tags">
                <span className="tag">Company updates</span>
                <span className="tag">Featured</span>
                <span className="tag">Industry experts</span>
              </div>
              <p>How to Speed Up Your Shopify Store for Better Conversions</p>
              <div className="publish-date">September 27, 2024</div>
            </div>
          </div>

          <div className="related-card">
            <img src={BlogDetailsImg4} alt="Related 2" />
            <div className="card-content">
              <div className="meta-tags">
                <span className="tag">Company updates</span>
                <span className="tag">Featured</span>
                <span className="tag">Industry experts</span>
              </div>
              <p>Why Your Shopify Store Needs a Custom Design in 2025</p>
              <div className="publish-date">September 6, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
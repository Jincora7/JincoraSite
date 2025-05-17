import React from 'react';
import './GrowthSection.css';
import Frame from '../../../assets/Frame.png'; // Replace with your actual image

export default function GrowthSection() {
  return (
    <div className="growth-section">
      <div className="growth-content">
        <div className="growth-text">
          <h2>Unlock Revenue Growth for Your Business</h2>
          <ul>
            <li>Custom stores built to convert</li>
            <li>Optimized design for higher sales</li>
            <li>Seamless payment and checkout setup</li>
            <li>Fast, mobile-ready shopping experience</li>
            <li>Scalable solutions for growing brands</li>
          </ul>
          <button className="growth-btn">Get started →</button>
        </div>
        <div className="growth-chart">
          <img src={Frame} alt="Growth Process Chart" />
        </div>
      </div>

      <div className="faq-section">
        <h3>From services to support — everything you need to know, right here.</h3>
        <div className="faq-item">
          <details>
            <summary>What platforms do you specialize in?</summary>
            <p>We specialize in Shopify and WordPress, including WooCommerce and custom development solutions.</p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>How long does a typical project take?</summary>
            <p>It depends on project complexity. Most projects take between 2–6 weeks.</p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>Do you offer post-launch support?</summary>
            <p>Yes, we provide ongoing support and maintenance to ensure long-term success.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>Can you migrate my current website?</summary>
            <p>Yes, we provide ongoing support and maintenance to ensure long-term success.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>Will my wesite be mobile-frineldy and SEO-ready?</summary>
            <p>es, we provide ongoing support and maintenance to ensure long-term success.</p>
          </details>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './GrowthSection.css';
import Frame from '/Home/GrowthSection/Frame.png'; // Replace with your actual image
import { useNavigate } from 'react-router-dom';

export default function GrowthSection() {
  const navigate=useNavigate();
  return (
    <div className="growth-section">
      <div className="growth-content">
        <div className="growth-text">
          <h2>Unleash New Revenue Opportunities</h2>
          <ul>
            <li>Custom stores built to convert</li>
            <li>Optimized design for higher sales</li>
            <li>Seamless payment and checkout setup</li>
            <li>Fast, mobile-ready shopping experience</li>
            <li>Scalable solutions for growing brands</li>
          </ul>
          <button onClick={() => navigate("/ContactUsPage")} className="growth-btn">Get started →</button>
        </div>
        <div className="growth-chart">
          <img src={Frame} alt="Growth Process Chart" />
        </div>
      </div>

      <div className="faq-section">
        <h2 className="FAQs">FAQ's</h2>
        <h3>From services to support — everything you need to know, right here.</h3>
        <div className="faq-item">
          <details>
            <summary>What platforms do you specialize in?</summary>
            <p>We focus on Shopify and WordPress, including WooCommerce, to deliver tailored, scalable eCommerce and business websites.
 Our team also supports third-party integrations and custom functionalities as needed.</p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>How long does a typical project take?</summary>
            <p>Most websites are completed within 1 to 3 weeks depending on your project’s size, content, and requirements.
 Urgent timelines can be accommodated with express delivery options.</p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>Do you offer post-launch support?</summary>
            <p>Yes, we provide flexible support plans for updates, troubleshooting, training, and continuous improvements after launch.
 Our goal is to keep your site running smoothly as your business evolves.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>Can you migrate my current website?</summary>
            <p>Absolutely. We handle full-site migrations, preserving your content, design elements, and SEO performance wherever possible.
Our process ensures a smooth, secure transition with minimal downtime.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>Will my wesite be mobile-frineldy and SEO-ready?</summary>
            <p>Yes, all our websites are responsive across devices and optimized for fast loading and search engine visibility.
 We follow SEO best practices from day one for better rankings.</p>
          </details>
        </div>
      </div>
    </div>
  );
}

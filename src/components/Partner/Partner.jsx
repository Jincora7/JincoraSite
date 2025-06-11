import React, { useState } from 'react';
import './Partner.css';

const Partner = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <div className="partner-page">
    

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p style={{ color: '#8b5cf6', fontSize: '16px', marginBottom: '10px' }}>Partners</p>
          <h1>Our Partners</h1>
          <p>Where Innovation Meets Collaboration—Expert <br /> Partners for Every eCommerce Need.</p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="filter-tabs">
          {['All', 'App Partners', 'Shopify Partner', 'WordPress Partners'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="partners-grid">
          {Array.from({ length: 11 }, (_, index) => (
            <div key={index} className="partner-card">
              <div className="partner-icon">Demo</div>
              <h3>Demo</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          ))}
        </div>

        <div className="load-more">
          <button className="load-more-btn">Load More →</button>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="form-container">
          <h2>Join a Trusted Network of eCommerce Professionals</h2>
          <p className="subtitle">Join Forces with Jincora — Experts in Scalable Shopify & WooCommerce Solutions</p>

          <form className="form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input type="email" id="email" placeholder="Enter your email address" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country*</label>
                <select id="country" required>
                  <option value="">-- Select --</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="in">India</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="partner-type">Partner Type*</label>
                <select id="partner-type" required>
                  <option value="">-- Select --</option>
                  <option value="shopify">Shopify Partner</option>
                  <option value="woocommerce">WooCommerce Partner</option>
                  <option value="app">App Partner</option>
                  <option value="agency">Agency Partner</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="organization">Organization Name</label>
              <input type="text" id="organization" placeholder="Enter your organization name" />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">I agree to <a href="#">Partner Policy</a></label>
            </div>

            <button type="submit" className="submit-btn">Sign Up →</button>
          </form>
        </div>
      </section>

     

      
    </div>
  );
};

export default Partner;
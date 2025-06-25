import React from 'react';
import './IgniteGrowth.css';
import IgniteGrowthImg from '/Service/IgniteGrowthImg.png' // You should extract the image from your screenshot or replace with your own

const IgniteGrowth = () => {
  return (
    <div className="ignite-section">
      <div className="left-content">
        <img src={IgniteGrowthImg} alt="Man with Laptop" className="main-image" />


      </div>

      <div className="right-content reduced-width">
        <h1 className="headline">Solutions That Ignite Growth</h1>
        <p className="subheadline">Powering Your Business Forward</p>
        <p className="description">
          Handpicked strategies and tools crafted to fuel your success at every stage of growth.
        </p>

        <div className="solutions-grid">
          <div className="solution-box horizontal-box">
            <div className="bar"></div>
            <div>
              <h2>Forge</h2>
              <p>Custom Solutions</p>
            </div>
          </div>
          <div className="solution-box horizontal-box">
            <div className="bar"></div>
            <div>
              <h2>Elevate</h2>
              <p>Scalable Platforms</p>
            </div>
          </div>
          <div className="solution-box horizontal-box">
            <div className="bar"></div>
            <div>
              <h2>Ignite</h2>
              <p>Growth Strategies</p>
            </div>
          </div>
          <div className="solution-box horizontal-box">
            <div className="bar"></div>
            <div>
              <h2>Shield</h2>
              <p>Trusted Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IgniteGrowth;

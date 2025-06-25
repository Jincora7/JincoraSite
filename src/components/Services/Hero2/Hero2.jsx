import React from 'react';
import './Hero2.css';
import Hero2img from '/Service/Hero2img.png'

function Hero2() {
  return (
    <section className="hero2-container">
      <div className="hero2-content">
        <div className="hero2-left">
          <img src={Hero2img} alt="E-commerce Illustration" />
        </div>
        <div className="hero2-right">
          <h1>
            From Startup to Scale-Up:<br />
            Expert Online Store<br />
            Solutions by <span className="highlight">Jincora</span>
          </h1>
          <p>
            Seamless eCommerce growth powered by tailored strategies
            and proven expertise.
          </p>
          <div className="hero2-buttons">
            <button className="btn-primary">Start Your Project →</button>
            <button className="btn-outline">Talk to an Expert →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;

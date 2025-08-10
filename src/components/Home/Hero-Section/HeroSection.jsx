import "./HeroSection.css";
import React from "react";

const HeroSection = () => {
    return (
        <section id="top-of-home" className="hero-section-wrap">
            {/* Background Video */}
            <div className="hero-video-container">
                <video
                    className="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="/18458403-hd_1920_1080_24fps.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="hero-video-overlay"></div>
            </div>

            {/* Left Section */}
            <div className="hero-section-left">
                <div className="hero-section-left-content">
                    <div className="hero-left-content-heading">
                        <h1>DESIGN DRIVEN</h1>
                        <h1>
                            <img
                                className="hero-section-left-bulb-image"
                                src="/Home/Hero/bulb.png"
                                alt="Bulb"
                            />
                            CREATIVE STRATEGY
                        </h1>
                        <h1>FOR GROWTH</h1>
                    </div>
                    <hr />
                    <p>
                        Driven by creativity, powered by technology, focused on
                        results.
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="hero-section-right">
                <img
                    className="hero-section-right-image"
                    src="/Home/Hero/mask-grp.png"
                    alt="Creative"
                />
            </div>
        </section>
    );
};

export default HeroSection;

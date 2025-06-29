import "./sticky.css";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PrimaryBtn from '../../../reusableComponents/PrimaryBtn/PrimaryBtn'
import {useNavigate} from "react-router-dom"

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StickycardsSections = () => {

    const navigate=useNavigate();

    // Refs
    const contentRefs = useRef([]);
    contentRefs.current = []; // reset on each render

    // Add ref to array
    const addToContentRefs = (el) => {
        if (el && !contentRefs.current.includes(el)) {
            contentRefs.current.push(el);
        }
    };

    useEffect(() => {
    if (typeof window !== 'undefined') {
        const totalContentElements = contentRefs.current.length;

        const timelines = contentRefs.current.map((el, index) => {
            const isLast = index === totalContentElements - 1;

            return gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: 'top top',
                    end: '+=70%',
                    scrub: true,
                },
            }).to(el, {
                ease: 'none',
                startAt: { filter: 'brightness(100%)' },
                filter: isLast ? 'none' : 'brightness(50%)',
                scale: 0.6,
                borderRadius: 50,
            }, 0);
        });

        return () => {
            timelines.forEach(tl => tl.scrollTrigger && tl.scrollTrigger.kill());
        };
    }
}, []);

    return (
        <main>
            <div className="wrap">
                <div ref={addToContentRefs} className="content content--sticky content--grid bg-1" >
                    <div className="content-box">
                        <h2 className="content__title">The  Website Design and Development</h2>
                        <p className="content__text  text-meta">Jincora crafts stunning, functional websites tailored to your business, combining cutting-edge design with seamless functionality to elevate your online presence.</p>
                        <PrimaryBtn onClick={()=>navigate("/services")} theme="primary" content="Know More " />
                    </div>
                    <img className="content__img" src="/stickyImg/Sticky1.png" alt="The Algorithm" />
                </div>
                <div ref={addToContentRefs} className="content content--sticky content--img-left  content--grid bg-2">
                    <div className="content-box">

                        <h2 className="content__title">The  Ecommerce All In One</h2>
                        <p className="content__text  text-meta">Jincora builds powerful eCommerce solutions, combining sleek design and seamless functionality to drive sales and enhance your online shopping experience.</p>
                        <PrimaryBtn onClick={()=>navigate("/services")} theme="primary" content="Know More " />
                    </div>
                    <img className="content__img " src="/stickyImg/Sticky2.png" alt="The Dogma" />
                    
                </div>
                <div ref={addToContentRefs} className="content content--sticky content--grid bg-3">
                   
                    <div className="content-box">
                        <h2 className="content__title">The Graphic Designing</h2>
                        <p className="content__text  text-meta">Jincora creates stunning visuals with expert graphic design services, bringing your brand to life through impactful and memorable designs.</p>
                        <PrimaryBtn onClick={()=>navigate("/services")} theme="primary" content="Know More " />
                    </div>
                    
                    <img className="content__img  content__img3" src="/stickyImg/Sticky3.png" alt="The Architects" />
                </div>
                <div ref={addToContentRefs} className="content content--sticky content--img-left content--grid bg-4">
                    <div className="content-box">

                        <h2 className="content__title">The Social Media Management</h2>
                        <p className="content__text content__text--left text-meta">Jincora transforms your online presence with expert social media management, driving engagement, growth, and seamless brand connections.</p>
                        <PrimaryBtn onClick={()=>navigate("/services")} theme="primary" content="Know More " />
                    </div>
                    <img className="content__img content__img4" src="/stickyImg/Sticky4.png" alt="The Wasteland" />
                </div>
                <div ref={addToContentRefs} className="content content--sticky content--grid bg-5">
                    <div className="content-box">

                        <h2 className="content__title">The Branding & Strategy</h2>
                        <p className="content__text content__text--left text-meta">Build a powerful brand identity that connects with your audience on a deeper level. We work with you to define your brand’s values, voice, and vision, creating strategies that position your business for success in a competitive market.</p>
                        <PrimaryBtn onClick={()=>navigate("/services")} theme="primary" content="Know More " />
                    </div>
                    <img className="content__img  content__img--right" src="/stickyImg/Sticky5.png" alt="The Narrative" />
                </div>

            </div>

        </main>
    );
};

export default StickycardsSections;
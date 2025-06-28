import React from 'react';
import './FAQ.css';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import PurplePage from '../PurplePage/PurplePage';



export default function FAQ() {



          const location = useLocation();


    useEffect(() => {
        if (location.state?.scrollTo === "top-of-FAQ") {
          const section = document.getElementById("top-of-FAQ");
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);

  return (
    <>
    <div id='top-of-FAQ' className="growth-section">


      <div className="faq-section">
        <h2 className="FAQs">FAQ's</h2>
        <h3>From services to support — everything you need to know, right here.</h3>
        <div className="faq-item">
          <details>
            <summary>What types of websites do you build?</summary>
            <p>We specialize in custom Shopify and WordPress (including WooCommerce) websites. Whether you're launching an eCommerce store or a business site, we build scalable solutions tailored to your goals.</p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>Can you help redesign an existing website?</summary>
            <p>Absolutely. We offer full redesign services to modernize your website, enhance user experience, and improve performance without losing your existing content or SEO value.</p>
          </details>
        </div>
        <div className="faq-item">
          <details>
            <summary>Do you provide content writing or branding?</summary>
            <p>Yes, we offer content creation, branding, and visual design support as part of our website packages to ensure a consistent and compelling brand presence.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>How is pricing structured for your services?</summary>
            <p>Our pricing depends on the scope, features, and complexity of your project. We offer transparent quotes with flexible packages to match your needs and budget.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>What’s included in your post-launch support?</summary>
            <p>Our support plans include website maintenance, updates, bug fixes, technical support, and training to help you manage and grow your site effectively.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>Can you integrate third-party tools and platforms?</summary>
            <p>Yes, we integrate tools like CRMs, payment gateways, booking systems, email marketing platforms, and more to streamline your business operations.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>Is my website going to be secure?</summary>
            <p>Security is a top priority. We implement best practices including SSL, regular backups, and plugin management to protect your site from vulnerabilities.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>Will I be able to manage the website myself?</summary>
            <p>Definitely. We build user-friendly admin panels and offer training so you can easily update content, products, or blog posts on your own.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>What if I need the website urgently?</summary>
            <p>We offer express delivery options for time-sensitive projects. Let us know your timeline, and we’ll do our best to accommodate your launch goals.</p>
          </details>
        </div>
         <div className="faq-item">
          <details>
            <summary>How do I get started with your services?</summary>
            <p>Reach out via our contact form or book a consultation. We’ll discuss your goals, gather requirements, and provide a personalized proposal to get started.</p>
          </details>
        </div>
      </div>
    </div>
    <PurplePage/>
    </>
  );
}

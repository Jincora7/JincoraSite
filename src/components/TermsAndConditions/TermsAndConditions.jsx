import "./TermsAndConditions.css"

import React from 'react'


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TermsAndConditions = () => {



        const location = useLocation();


    useEffect(() => {
        if (location.state?.scrollTo === "top-of-TermsAndConditions") {
          const section = document.getElementById("top-of-TermsAndConditions");
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);



  return (
    <>
    <div id="top-of-TermsAndConditions"></div>
    <div id="TermsAndConditions" className="terms-wrapper">
      <div className="terms-section">
        <h1>Terms and Conditions</h1>

        <p>These Terms and Conditions govern your use of the Jincora website and services. By accessing our website or engaging our services, you agree to these terms in full.
        </p>

        <div className="terms-content">

          <div className="terms-content-list">
            <h3>1. Services Offered </h3>
            <p>
              Jincora provides a variety of digital services including:
            </p>

            <ul>
              <li>E-commerce Development (Shopify, WooCommerce)</li>
              <li>Website Development (Core technologies, WordPress)</li>
              <li>Platform Migration (e.g., WooCommerce to Shopify)</li>
              <li>Web App Development</li>
              <li>Custom Development Projects</li>
              <li>Graphic Design</li>
              <li>Social Media Marketing</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Data Analytics</li>
              <li>Other Information Services</li>
            </ul>
          </div>

          <div className="terms-content-list">
            <h3>2. Client Responsibilities</h3>
            <p>
              Clients agree to:
            </p>

            <ul>
              <li>Provide accurate project requirements and materials.</li>
              <li>Review and approve work in a timely manner.</li>
              <li>Make payments as agreed in project terms or invoices.</li>
            </ul>
          </div>

          <div className="terms-content-list">
            <h3>3. Intellectual Property</h3>
            <p>
              Unless otherwise agreed:
            </p>

            <ul>
              <li>All project deliverables remain the property of Jincora until full payment is received.</li>
              <li>Custom work created for clients will be transferred upon completion and payment.</li>
              <li>You must not copy or reuse materials from our website or portfolio without permission.</li>
            </ul>
          </div>

          <div className="terms-content-list">
            <h3>4. Limitation of Liability</h3>
            <p>
              Jincora shall not be held liable for:
            </p>

            <ul>
              <li>Indirect or consequential damages from using our services.</li>
              <li>Issues caused by third-party tools, apps, or platforms.</li>
              <li>Delays or data loss resulting from client-side negligence.</li>
            </ul>
          </div>

          <div className="terms-content-list">
            <h3>5. Payment Terms</h3>

            <ul>
              <li>Payment terms will be defined per project or service agreement.</li>
              <li>Delays in payment may result in suspension of services.</li>
              <li>All prices are exclusive of taxes unless stated otherwise.</li>
            </ul>
          </div>

          <div className="terms-content-list">
            <h3>6. Termination</h3>

            <p>We reserve the right to terminate services if a client breaches these terms, including non-payment or misuse of services.</p>
          </div>

          <div className="terms-content-list">
            <h3>7. Modifications</h3>

            <p>We may update these terms from time to time. Continued use of our services implies acceptance of the revised terms.
            </p>
          </div>

          <div className="terms-content-list">
            <h3>8. Governing Law</h3>

            <p>These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Bhopal, Madhya Pradesh.</p>
          </div>

          <hr />

          <p>For questions or concerns about these policies, please contact us at admin@jincora.com</p>

        </div>
      </div>
    </div>
    </>
  )
}

export default TermsAndConditions
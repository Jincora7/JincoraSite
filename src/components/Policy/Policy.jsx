import "./Policy.css"

import React from 'react'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Policy = () => {




        const location = useLocation();


    useEffect(() => {
        if (location.state?.scrollTo === "top-of-privacy-policy") {
          const section = document.getElementById("top-of-privacy-policy");
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);



  return (
    <>
    <div id="top-of-privacy-policy"></div>
    <div className="policy-wrapper">
      <div className="policy-section">
        <h1>Privacy Policy </h1>

        <div className="policy-content">
          <p>
            At Jincora, we are committed to protecting your privacy and ensuring your personal data is handled responsibly and transparently. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website and services.
          </p>

          <div className="policy-content-list">
            <h4>1. Information We Collect</h4>

            <p>
              We may collect and process the following types of personal data:
            </p>

            <ul>
              <li> <strong>Contact Information: </strong>name, email address, phone number. </li>
              <li> <strong>Business Details: </strong>store URL, project requirements, and service inquiries.</li>
              <li> <strong>Usage Data: </strong>IP address, browser type, pages visited, and usage behavior via cookies or analytics tools.</li>
              <li> <strong>Payment Information: </strong>Only when applicable and handled via secure third-party processors.</li>
            </ul>
          </div>


          <div className="policy-content-list">
            <h4>2. How We Use Your Information
            </h4>

            <p>
              We use your information to:
            </p>

            <ul>
              <li>Provide and improve our services (e.g., eCommerce development, SEO, app development).</li>
              <li>Communicate with you regarding projects, support, or updates.</li>
              <li>Comply with legal obligations and prevent fraud.</li>
              <li>Analyze website traffic and user behavior for optimization.</li>
            </ul>
          </div>

          <div className="policy-content-list">
            <h4>3. Legal Basis for Processing (GDPR)</h4>

            <p>
              We process your data on the following bases:
            </p>

            <ul>
              <li> <strong>Consent: </strong>When you opt-in to communications or marketing.</li>
              <li> <strong>Contractual Obligation: </strong>To fulfill a service you requested.</li>
              <li> <strong>Legitimate Interest: </strong>For improving services and maintaining security.</li>
              <li> <strong>Legal Compliance: </strong>Where required by law.</li>
            </ul>
          </div>

          <div className="policy-content-list">
            <h4>4. Data Retention</h4>

            <p>
              We retain personal data only as long as necessary for the purposes outlined above or to comply with legal obligations.
            </p>
          </div>

          <div className="policy-content-list">
            <h4>5. Data Sharing and Security</h4>

            <p>
              We do not sell or rent your data. We may share it with:
            </p>

            <ul>
              <li>Trusted third-party providers (e.g., payment processors, analytics tools).
              </li>

              <li>Legal authorities, if required for compliance.
              </li>
            </ul>

            <p>
              All data is stored securely with technical and organizational safeguards in place.
            </p>
          </div>

          <div className="policy-content-list">
            <h4>6. Your Rights (Under GDPR)</h4>

            <p>
              You have the right to:
            </p>

            <ul>
              <li>Access, correct, or delete your personal data.
              </li>

              <li>Object to or restrict certain types of processing.
              </li>

              <li>Withdraw consent at any time.
              </li>

              <li>Lodge a complaint with a data protection authority.
              </li>
            </ul>

            <p>
              To exercise your rights, contact us at admin@jincora.com.
            </p>
          </div>

          <div className="policy-content-list">
            <h4>7. Cookies</h4>

            <p>
              We use cookies for essential website functionality, performance tracking, and user experience enhancement. You can manage your cookie preferences through your browser settings.
            </p>
          </div>

        </div>

      </div>
      
    </div>
    </>
  )
}

export default Policy
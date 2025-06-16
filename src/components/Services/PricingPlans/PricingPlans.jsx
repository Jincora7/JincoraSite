import React from "react";
import "./PricingPlans.css";

const plans = [
  {
    name: "Basic",
    price: "$199",
    yearly: "$2,388/year",
    save: "Save 10%",
    features: [
      "10 Monthly Hours",
      "New Banner Design",
      "Product Upload",
      "Bug Resolving",
      "App Installation",
      "On-Page SEO",
      "Domain & Email Support",
      "Monthly Backup",
      "48h Response Time",
 
    ],
    highlight: "Grow 15% Faster"
  },
  {
    name: "Essentials",
    price: "$399",
    yearly: "$4,788/year",
    save: "Save 20%",
    features: [
      "20 Monthly Hours",
      "New Sections Design",
      "Product Upload",
      "Troubleshooting & Bug Fixes",
      "App Installation",
      "On-Page + Off-Page SEO",
      "Email Campaign Setup",
      "Domain & Email Support",
      "Monthly Backup",
      "Bi-Weekly Meetings",
      "24h Response Time",
      "Design/SEO Performance Report",
    ],
    highlight: "Grow 15% Faster"
  },
  {
    name: "Professional",
    price: "$1,299",
    yearly: "$15,588/year",
    save: "Save 50%",
    features: [
      "30 Monthly Hours",
      "New Page Design",
      "Product Upload",
      "Code Audit & Performance Tuning",
      "Weekly Site Check",
      "App Installation",
      "On/Off-Page SEO",
      "Meta Ads Management",
      "Conversion Optimization (CRO)",
      "Email Campaigns + Setup",
      "Domain, Email & Google Ads Support",
      "Google Data Studio Report",
      "Weekly Meetings",
      "Monthly Backup & Staging",
      "12h Response Time",
    ],
    highlight: "Grow 15% Faster"
  }
];

export default function PricingPlans() {
  return (
    <div className="pricing-section">
      <h2>Affordable Packages Tailored for You</h2>
      <p className="subtitle">
        Reliable support plans crafted to safeguard and grow your online store.
      </p>
      <div className="offer-banner">
        Launch Special! Get up to 50% OFF on All Yearly Plans — Exclusive Bonus
        for Our First Merchants! Don’t Miss Out!
      </div>
      <div className="plans">
        {plans.map((plan, index) => (
          // <div key={index} className="plan-card">
          //   <div className="highlight">{plan.highlight}</div>
          //   <h3>{plan.name}</h3>
          //   <div className="price">{plan.price}</div>
          //   <div className="yearly">{plan.yearly}</div>
          //   <div className="save">{plan.save}</div>
          //   <hr />
          //   <h4>Unlock Long-Term Value</h4>
          //   <ul>
          //     {plan.features.map((feature, i) => (
          //       <li key={i}>{feature}</li>
          //     ))}
          //   </ul>
          //   <button className="subscribe-btn">Subscribe now →</button>
          // </div>

          <div key={index} className="plan-card">
  <div className="highlight">{plan.highlight}</div>
  <div className="plan-content">
    <h3>{plan.name}</h3>
    <div className="price">{plan.price}</div>
    <div className="yearly">{plan.yearly}</div>
    <div className="save">{plan.save}</div>
    <hr />
    <h4>Unlock Long-Term Value</h4>
    <ul>
      {plan.features.map((feature, i) => (
        <li key={i}>{feature}</li>
      ))}
    </ul>
  </div>
  <div className="spacer"></div>
  <button className="subscribe-btn">Subscribe now →</button>
</div>

        ))}
      </div>
    </div>
  );
}

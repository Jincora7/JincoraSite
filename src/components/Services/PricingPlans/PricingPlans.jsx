import React from "react";
import "./PricingPlans.css";

const plans = [
  {
    name: "Basic",
    price: "$199",
    yearly: "$2,388/year",
    save: "Save 10%",
    features: [
      "Monthly Store Health Check",
      "Theme & App Updates",
      "Basic Performance Optimization",
      "Minor Bug Fixes (up to 2 hours)",
      "Shopify Core Updates",
      "Broken Link & 404 Monitoring",
      "Form Testing (Monthly)",
      "Google Analytics & Tag Audit",
      "Email Support",
      "Plugin Conflict Monitoring",
      "Uptime Monitoring",
      "Manual Backup (Monthly)",
      "Simple Design Tweaks (1 task/month)",
      "Third-Party App Monitoring",
      "Checkout Testing (Quarterly)",
      "Storefront Content Update (1/mo)"
    ],
    highlight: "Grow 15% Faster"
  },
  {
    name: "Essentials",
    price: "$399",
    yearly: "$4,788/year",
    save: "Save 20%",
    features: [
      "Everything in Basic +",
      "Priority Support Queue",
      "Speed Optimization",
      "Bi-Weekly Site Audits",
      "Bug Fixes (up to 6 hours)",
      "CRO Suggestions (Monthly)",
      "App Integration Support",
      "Schema Markup Monitoring",
      "Accessibility Improvements",
      "Customer Journey Testing",
      "SEO Fixes (Technical)",
      "Custom Code Tweaks (minor)",
      "Email + Chat Support",
      "Advanced Form Testing",
      "Seasonal Banner Updates",
      "Audit Reports With Recommendations"
    ],
    highlight: "Grow 15% Faster"
  },
  {
    name: "Professional",
    price: "$1,299",
    yearly: "$15,588/year",
    save: "Save 50%",
    features: [
      "Everything in Essentials +",
      "Dedicated Account Manager",
      "Emergency Support (24–48h response)",
      "Unlimited Bug Fixes (within scope)",
      "Monthly CRO Strategy Call",
      "Advanced Analytics Integration",
      "Funnel Testing & Reporting",
      "App Performance Review",
      "Custom Feature Troubleshooting",
      "Automated Testing Integration",
      "Staging Site Management",
      "Full Site Backup (Weekly)",
      "VIP Support Channel",
      "Custom Development Support",
      "Quarterly Design Suggestions",
      "Priority Testing During Shopify Updates"
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
          <div key={index} className="plan-card">
            <div className="highlight">{plan.highlight}</div>
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
            <button className="subscribe-btn">Subscribe now →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

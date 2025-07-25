import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import "./AffiliateAgreement.css";

const AffiliateAgreement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "top-of-affiliate-agreement") {
      const section = document.getElementById("top-of-affiliate-agreement");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div id="top-of-affiliate-agreement"></div>
      <div className="policy-wrapper">
        <div className="policy-section">
          <h1>Jincora Affiliate Program Agreement</h1>
          <div className="policy-content">

            <p>
              <strong>PLEASE READ THIS AFFILIATE PROGRAM AGREEMENT CAREFULLY.</strong><br />
              This agreement is a legal contract between you (the “Affiliate”) and us, Jincora (“we,” “us,” or “our”), outlining the terms of your participation in the Jincora Affiliate Program.
              <br />
              By enrolling in our Affiliate Program, you agree to comply with the terms and conditions set out below. If you do not agree, please do not participate in the program.
            </p>

            {/* Section 1 */}
            <div className="policy-content-list">
              <h4>1. Definitions</h4>
              <ul>
                <li>
                  <strong>Affiliate: </strong>Any individual or entity who promotes Jincora services via their channels, such as influencers, agencies, freelancers, bloggers, Shopify experts, and consultants.
                </li>
                <li>
                  <strong>Agreement: </strong>This document and any additional resources or guidelines referenced herein.
                </li>
                <li>
                  <strong>Services: </strong>Refers to all the services offered by Jincora, including Shopify development, site maintenance, SEO, platform migration, WordPress development, custom apps, website design and development, UI/UX, and general IT solutions.
                </li>
                <li>
                  <strong>Commission: </strong>The compensation paid to an affiliate for successfully referring paying customers.
                </li>
                <li>
                  <strong>Recurring Plan: </strong>Monthly or annual service plans subscribed by clients.
                </li>
                <li>
                  <strong>One-Time Service: </strong>A project-based or fixed-scope service with a single payment.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="policy-content-list">
              <h4>2. Marketing Materials</h4>
              <ul>
                <li>Once approved, Affiliates will gain access to official Jincora brand assets, service pitch decks and value proposition documents, ongoing support from our Affiliate Relations Team, knowledge base, and partner resources.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="policy-content-list">
              <h4>3. Tracking & Attribution</h4>
              <ul>
                <li>Each affiliate will be assigned a unique referral tracker, currently managed through a shared Google Sheet (to be updated to a Partner Portal in the future).</li>
                <li>We honor a 30-day referral window—leads that become paying clients within 30 days will be attributed to you.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="policy-content-list">
              <h4>4. Commissions & Payment Structure</h4>
              <ul>
                <li>
                  <strong>Recurring Plans:</strong> Up to 50% commission, based on volume and service level.
                </li>
                <li>
                  <strong>One-Time Projects:</strong> Flat 10% commission per qualified referral.
                </li>
                <li>
                  <strong>Commission Examples:</strong>
                  <ul>
                    <li>Refer a client for a $500/month plan = you earn up to $250/month as long as they remain subscribed.</li>
                    <li>Refer a client for a one-time $3,000 project = you earn $300 (10%).</li>
                  </ul>
                </li>
                <li>
                  <strong>Payment Cycle:</strong> Commissions are paid on the 10th of each month via Stripe or bank transfer. Minimum payout threshold is $50 (amounts under roll over).
                </li>
                <li>
                  <strong>Reporting Responsibility:</strong> Affiliates must update their referral tracking sheet. Payouts are based on verified entries as of the last day of the previous month.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="policy-content-list">
              <h4>5. Commission Adjustments</h4>
              <ul>
                <li>Commission amounts change if a client upgrades/downgrades/cancels. Upgrades increase commission, downgrades/cancellations reduce or discontinue commission.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="policy-content-list">
              <h4>6. Prohibited Promotional Methods</h4>
              <p>Engaging in the following may result in immediate termination and forfeiture of pending commissions:</p>
              <ul>
                <li>Promoting on coupon or deal sites</li>
                <li>Running paid ads using our brand name/keywords without approval</li>
                <li>Misrepresenting Jincora’s services or offers</li>
                <li>Offering commission-sharing or cash incentives</li>
                <li>Impersonating Jincora or cloning our website</li>
                <li>Sending unsolicited messages or spam</li>
                <li>Violating third-party platform rules</li>
              </ul>
              <p>If you're unsure about a tactic, contact us before proceeding.</p>
            </div>

            {/* Section 7 */}
            <div className="policy-content-list">
              <h4>7. Transparency of Channels</h4>
              <p>We may request details about your promotional strategies and channels. Affiliates must share accurate information when requested.</p>
            </div>

            {/* Section 8 */}
            <div className="policy-content-list">
              <h4>8. Affiliate Communications</h4>
              <ul>
                <li>By joining, you agree to receive updates about Jincora services, affiliate program changes, marketing tips, and partner feedback surveys.</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="policy-content-list">
              <h4>9. Ongoing Support</h4>
              <p>Our Partner Success Team will guide onboarding, performance reviews, and provide support to help you succeed.</p>
            </div>

            {/* Section 10 */}
            <div className="policy-content-list">
              <h4>10. Changes to the Agreement</h4>
              <p>Jincora may update this agreement at any time. You’ll be notified via email about material changes. Continued participation after changes indicates acceptance.</p>
            </div>

            {/* Section 11 */}
            <div className="policy-content-list">
              <h4>11. Term & Termination</h4>
              <ul>
                <li>
                  <strong>Term:</strong> This agreement remains in effect while you’re active. If you do not refer a paying customer within 90 days, your status may be deactivated.
                </li>
                <li>
                  <strong>Termination:</strong> Jincora may suspend or terminate your participation at its sole discretion for reasons such as false/misleading promotion, spam, fraud, violation of IP, inappropriate site promotion, or poor tracking/communication.
                </li>
              </ul>
            </div>

            {/* Section 12 */}
            <div className="policy-content-list">
              <h4>12. Final Notes</h4>
              <p>Participation is voluntary and does not create employment. You are not an agent or representative of Jincora. This agreement does not grant legal rights or claims against Jincora.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateAgreement;

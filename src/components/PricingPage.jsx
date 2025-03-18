import React from 'react';
    import './PricingPage.css';

    function PricingPage() {
      return (
        <div className="pricing-container">
          <h2>Pricing Plans</h2>
          <div className="pricing-plans">
            <div className="pricing-plan">
              <h3>Free</h3>
              <p className="price">$0/month</p>
              <ul>
                <li>Access to basic features</li>
                <li>Limited AI notes</li>
              </ul>
              <button disabled>Current Plan</button>
            </div>
            <div className="pricing-plan">
              <h3>Standard</h3>
              <p className="price">$10/month</p>
              <ul>
                <li>All Free features</li>
                <li>Full AI notes access</li>
                <li>Exam checker access</li>
              </ul>
              <button>Subscribe</button>
            </div>
            <div className="pricing-plan">
              <h3>Premium</h3>
              <p className="price">$25/month</p>
              <ul>
                <li>All Standard features</li>
                <li>Priority support</li>
                <li>Exclusive content</li>
              </ul>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      );
    }

    export default PricingPage;

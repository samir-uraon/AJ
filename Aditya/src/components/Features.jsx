import React from "react";
import "./styles/features.css"

export default function Features() {
  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Real-Time Gold Rates</h3>
          <p>Track live 22K & 24K gold rates and receive instant alerts.</p>
        </div>
        <div className="card">
          <h3>Purchase</h3>
          <p>Buy gold pre-paid or reserve for pickup at our store, with partial pickup support.</p>
        </div>
 
        <div className="card">
          <h3>Loyalty & Referral</h3>
          <p>Earn rewards and enjoy tiered benefits for loyal customers.</p>
        </div>
      </div>
    </section>
  );
}

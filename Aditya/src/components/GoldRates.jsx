import React from "react";
import "./styles/GoldRates.css"

export default function GoldRates() {
  return (
    <section className="gold-rates" id="gold-rates">
      <h2>Live Gold Rates</h2>
      <div className="rates-cards">
        <div className="rate-card">
          <h3>22K Gold</h3>
          <p>₹5000 / g</p>
        </div>
        <div className="rate-card">
          <h3>24K Gold</h3>
          <p>₹5500 / g</p>
        </div>
      </div>
    </section>
  );
}

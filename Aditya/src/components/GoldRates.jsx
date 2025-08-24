import React, { useEffect } from "react";
import "./styles/GoldRates.css"

import {useState } from "react";

export default function GoldRates(props) {

 
  return (
    <section className="gold-rates" id="gold-rates">
      <h2>Live Gold Rates</h2>
      <div className="rates-cards">
        <div className="rate-card">
          <h3>22K Gold</h3>
          <p>{props.Rates["22k"]}</p>
        </div>
        <div className="rate-card">
          <h3>24K Gold</h3>
          <p>{props.Rates["24k"]}</p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Hero.css"

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>Aditya Jewellers</h1>
        <p>Secure | Transparent | Luxurious Gold Investments at Your Fingertips.</p>
      <NavLink to="/Buy-Gold"><button className="primary-btn">Buy Now</button></NavLink>
      </div>
    </section>
  );
}

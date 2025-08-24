import React, { useState } from "react";
import "./styles/Navbar.css";

import {NavLink} from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/shop-details"><div className="logo"><img src="logo.png" alt="Logo" /></div></NavLink>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#gold-rates">Gold Rates</a></li>
        <li><a href="#purchase">Price Calculator</a></li>
     <NavLink to="/history" id="history">History</NavLink>
					<NavLink to="/Buy-Gold" id="buy-gold">Buy Gold</NavLink>
        <button className="secondary-btn">Login</button>
       
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

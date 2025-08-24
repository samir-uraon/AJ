import React, { useState } from "react";
import "./styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>
      
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#gold-rates">Gold Rates</a></li>
        <li><a href="#purchase">Buy Gold</a></li>
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

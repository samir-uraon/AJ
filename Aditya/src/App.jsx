import React from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import GoldRates from "./components/GoldRates.jsx";
import Purchase from "./components/Purchase.jsx";
import SavingsWallet from "./components/SavingsWallet.jsx";
import AdminDashboardSection from "./components/AdminDashboardSection.jsx";
import Footer from "./components/Footer.jsx";
 


export default function App() {


  useEffect(()=>{

if (navigator.geolocation && !localStorage.getItem("location")) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
    }
  );
} 

},[])

  return (
    <div className="website-container">
      <Navbar/>
      <Hero />
      <GoldRates />
      <Purchase />
      <SavingsWallet />
      <Features />
      <Footer />
    </div>
  );
}

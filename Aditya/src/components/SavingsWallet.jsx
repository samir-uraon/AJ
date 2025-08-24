import React from "react";
import "./styles/SavingsWallet.css"
import { NavLink } from "react-router-dom";

export default function SavingsWallet() {
  return (
    <section className="savings-wallet">
      <NavLink to="/shop-details">
        <div className="savings-card" id="shop-details">
          <h3>Shop Details</h3>
          <p>This is the shop to collect your gold.
          (Click here for more details)
          </p>
        </div>
      </NavLink>
      <NavLink to="/customer-history">
        <div className="wallet-card" id="customer-history">
          <h3>Customer History</h3>
          <p>  Here you can view your gold balance and transaction history.</p>
        </div>
      </NavLink>
    </section>
  );
}

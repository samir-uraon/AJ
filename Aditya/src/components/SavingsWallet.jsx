import React from "react";
import "./styles/SavingsWallet.css"
export default function SavingsWallet() {
  return (
    <section className="savings-wallet">
      <div className="savings-card">
        <h3>Gold Savings Plan</h3>
        <p>Deposit monthly for 11 months & get gold at average rate + bonus.</p>
      </div>
      <div className="wallet-card">
        <h3>Customer Wallet</h3>
        <p>Store residual payments and use them for future purchases.</p>
      </div>
    </section>
  );
}

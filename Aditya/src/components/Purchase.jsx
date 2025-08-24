import React, { useState } from "react";
import "./styles/Purchase.css"
export default function Purchase() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const handleBuy = () => {
    const grams = (parseFloat(amount) / 5000).toFixed(2);
    setResult(`You will get ${grams} grams of 22K gold.`);
  };

  return (
    <section className="purchase" id="purchase">
      <h2>Gold Price Calculator</h2>
      <div className="purchase-form">
        <label htmlFor="">Amount in Rupees : </label>
        <input
          type="number"
          placeholder="Amount in ₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
          <input id="gm"
          type="number"
          placeholder="Weight in g"
          defaultValue={10}
       min={0.01}
          onChange={(e) => setAmount(e.target.value)}
        /> 
        <label htmlFor="">in g</label>
      </div>
      <p className="purchase-result">{result}</p>
    </section>
  );
}

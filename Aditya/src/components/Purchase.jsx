import React, { useState } from "react";
import "./styles/Purchase.css";

export default function Purchase(props) {

  const rate22k = parseFloat(props.Rates["22k"].replace(/[₹ /g]/g, ''));

 
  const [amount, setAmount] = useState("");
  const [grams, setGrams] = useState("");
  const [result, setResult] = useState("");
  

  
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    
 
    if (value && rate22k) {
      const calculatedGrams = (parseFloat(value) / rate22k).toFixed(2);
      setGrams(calculatedGrams);
      setResult(`You will get ${calculatedGrams} grams of 22K gold`);
    } else {
      setGrams("");
     
    }
  };

  const handleGramsChange = (e) => {
    const value = e.target.value;
    
    setGrams(value);
 
    if (value && rate22k) {
      const calculatedAmount = Math.ceil(parseFloat(value) * rate22k).toFixed(2);
      setAmount(calculatedAmount);
      setResult(`The cost of ${value} grams of 22K gold is ₹${calculatedAmount}`);
    } else {
      setAmount("");
      setResult("");
    }
  };
  
  return (
    <section className="purchase" id="purchase">
      <h2>22K Gold Price Calculator</h2>
      <div className="purchase-form">
        <div className="input-group">
          <label htmlFor="amount">Amount in Rupees:  </label>
          <input
            id="amount"
            type="number"
            placeholder="Amount in ₹"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
     
        <div className="input-group">
          <input
            id="gm"
            type="number"
            placeholder="Weight in g"
            value={grams}
            onChange={handleGramsChange}
            min={0.01}
          />
                    <label htmlFor="grams"> : Weight in Grams</label>

        </div>
      </div>
      <p className="purchase-result">{result}</p>
    </section>
  );
}
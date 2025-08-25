// BuyGold.jsx
import React, { useState } from "react";
import {useEffect } from "react";
import Backbar from "./Backbar";

export default function BuyGold() {
  const [grams, setGrams] = useState("");
  const [pricePerGram, setPricePerGram] = useState(0); // Example rate, you can fetch live
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
				  if (value.includes(".")) {
      const [whole, decimal] = value.split(".");
      if (decimal.length > 2) return;
    }
    if (!isNaN(value)) {

      setGrams(value);
      setTotal(value * pricePerGram);
    }
  };


				const [rates, setRates] = useState({
				"22k": "Loading...",
 
		});
		

const BASE_URL = `${import.meta.env.VITE_backend_url}`;

		useEffect(() => {
	
				const fetchGoldRates = async () => {
						try {
								const url = `${BASE_URL}/api/goldrates`; 
								
								const response = await fetch(url);
								
								if (!response.ok) {
										throw new Error(`HTTP error! status: ${response.status}`);
								}
							
								const data = await response.json();
	

const goldPerGram = (data.gold_22k_rate);
 

setPricePerGram(Math.ceil(goldPerGram));

	document.querySelector("#idinputprice").value = pricePerGram;
	

						} catch (error) {
				console.log(error);
				
								setRates({
										"22k": "Loading...",
								});
						}
				};
	
				fetchGoldRates();

				const intervalId = setInterval(fetchGoldRates, 300000);

				return () => clearInterval(intervalId);

		}, []);


			useEffect(() => {
				window.scrollTo(0, 0); // scroll to top whenever pathname changes
		}, []);

  return (
			<>
			<Backbar />
	
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 20, border: "1px solid #f0d88d", borderRadius: 14, background: "#fff8e1" }}>
      <h1 style={{ marginBottom: 20 }}>💰 Buy Gold</h1>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>
          Weight in grams :
        </label>
        <input
          type="number"
										min={0.01}
									 
          value={grams}
										onChange={(e) => {
								handleChange(e);
							
										}}
         
          placeholder="Enter grams"
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 8,
            border: "1px solid #e3cc7a",
            fontSize: 16,
          }}
        />
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>
          Price per gram (22K 91.6% Gold) : (Without Making Charges)
        </label>
        <input id="idinputprice"
          type="text"
          value={pricePerGram}
          readOnly
          onChange={(e) => setPricePerGram(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 8,
            border: "1px solid #e3cc7a",
            fontSize: 16,
          }}
        />
      </div>

      <div style={{ marginTop: 20, fontSize: 18, fontWeight: 600 }}>
        Total Amount: ₹ {total.toFixed(2)} (Including GST)
      </div>

      <button disabled={total === 0}
        style={{
          marginTop: 24,
          padding: "12px 20px",
          borderRadius: 10,
          border: "none",
          background: "#f5e6b3",
          fontWeight: 600,
          cursor: "pointer",
        }}
        onClick={() => alert(`You are buying ${grams}g gold for ₹${total.toFixed(2)}`)}
      >
        Pay  <span style={{marginLeft: "5px"}}> ₹ {total.toFixed(0)}</span>
      </button>
    </div>
				</>
  );
}

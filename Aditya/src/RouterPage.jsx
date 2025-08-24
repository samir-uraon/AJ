import React from "react";
import { useEffect,useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import GoldRates from "./components/GoldRates.jsx";
import Purchase from "./components/Purchase.jsx";
import SavingsWallet from "./components/SavingsWallet.jsx";
import AdminDashboardSection from "./components/AdminDashboardSection.jsx";
import Footer from "./components/Footer.jsx";
	
	

import "./App.css"

export default function App() {

const [loading, setloading] = useState(true);
				const [rates, setRates] = useState({
				"22k": "Loading...",
				"24k": "Loading...",
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
const goldPerGram2 = (data.gold_22k_rate)*(24/22);
	

								setRates({
										"22k": `₹${Math.ceil(goldPerGram)} / g`,
										"24k": `₹${Math.ceil(goldPerGram2)} / g`,
								});
				setTimeout(() => {
					setloading(false);
				}, 1000);

						} catch (error) {
				console.log(error);
				
								setRates({
										"22k": "Loading...",
										"24k": "Loading..."
								});
						}
				};
	
				fetchGoldRates();

				const intervalId = setInterval(fetchGoldRates, 300000);

				return () => clearInterval(intervalId);

		}, []);

//  useEffect(()=>{

//if (navigator.geolocation && !localStorage.getItem("location")) {
//  navigator.geolocation.getCurrentPosition(
//    (position) => {
//      const latitude = position.coords.latitude;
//      const longitude = position.coords.longitude;
//    }
//  );
//} 

//},[])

if(loading) {	
	return (
		<div className="contains">
			<div className="loader"></div>
		</div>
	);
}

		return (
				<>
				
				<div className="website-container">
						<Navbar />
						<Hero />
						<GoldRates Rates={rates}/>
						<Purchase Rates={rates}/>
						<SavingsWallet />
						<Features />
						<Footer />
				</div>
				</>
		);
}

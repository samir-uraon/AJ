
import React from "react";
import Backbar from "./Backbar";
import	{ useEffect } from "react";


export default function ShopDetails({
  phone = "+91 9771355707",
  hours = "11:00 AM - 6:00 PM",
  owner = "Manoj Kumar",
  address = "Budhauli Chawk, Sheikhpura (Bihar)",
}) {

	  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top whenever pathname changes
  }, []);

  const box = {
    maxWidth: 880,
    margin: "24px auto",
    padding: "28px",
    borderRadius: 16,
    background:
      "linear-gradient(180deg, #fffef7 0%, #fffaf0 60%, #fff4db 100%)",
    border: "1px solid #ead9a3",
    boxShadow:
      "0 10px 18px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.6)",
    fontFamily:
      "-apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Noto Sans', sans-serif",
    color: "#302b1e",
  };

  const badge = {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 999,
    background: "#f5e6b3",
    border: "1px solid #e3cc7a",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: 0.3,
    color: "#5c4b12",
    marginBottom: 12,
  };

  const h1 = {
    textAlign	: "center",
    fontSize: 40,
    margin: "6px 0 20px",
    fontWeight: 800,
    fontFamily:"monospace"
  };

  const sub = { margin: "2px 0 18px", opacity: 0.85 };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
    marginTop: 8,
  };

  const card = {
    borderRadius: 14,
    border: "1px solid #ecd9a6",
    background: "#fffdf5",
    padding: 14,
    fontSize: 16,
    lineHeight: 1.5,
  };

  const bullet = { display: "flex", gap: 10, alignItems: "start" };

  const tag = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 12px",
    borderRadius: 12,
    border: "1px dashed #e3cc7a",
    background: "#fffaf0",
    fontSize: 13,
  };

  const hr = { border: 0, height: 1, background: "#efdfb6", margin: "18px 0" };

  const small = { fontSize: 13, opacity: 0.9 };

  return (
			<>
			<Backbar />
    <section style={box} aria-label="Aditya Jewellers profile">
      <span style={badge}>✨ Where Purity Meets Trust</span>
      <h1 style={h1}>Aditya Jewellers</h1>
      <p style={sub}>
        <strong>Owner:</strong> {owner}    |  <strong> Location:</strong> {address}
      </p>

      <p>
        At <strong>Aditya Jewellers</strong>, we make gold buying simple,
        transparent, and trustworthy. Every purchase is verified and securely
        recorded, so you can invest with confidence. Buy online at{" "}
        <strong>live market rates</strong> and collect from our store.
      </p>

      <div style={grid}>
        <div style={card}>
          <div style={bullet}>
            <span>💎</span>
            <div>
              <strong>100% Purity Guarantee</strong>
              <br />
              Available in <b>18K, 22K, and 24K</b>.
            </div>
          </div>
        </div>

        <div style={card}>
          <div style={bullet}>
            <span>📜</span>
            <div>
              <strong>Digital Certificate & Invoice</strong>
              <br />
              Safe, verifiable record of every purchase.
            </div>
          </div>
        </div>

        <div style={card}>
          <div style={bullet}>
            <span>🏆</span>
            <div>
              <strong>Savings & Referral Plans</strong>
              <br />
              Invest monthly and earn rewards.
            </div>
          </div>
        </div>

        <div style={card}>
          <div style={bullet}>
            <span>🔒</span>
            <div>
              <strong>Secure Payments</strong>
              <br />
              Pay online with confidence.
            </div>
          </div>
        </div>

        <div style={card}>
          <div style={bullet}>
            <span>🤝</span>
            <div>
              <strong>Customer Support</strong>
              <br />
              Chat with us anytime.
            </div>
          </div>
        </div>
      </div>

      <hr style={hr} />

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <span style={tag}>🛍️ Live market rate purchases</span>
        <span style={tag}>📦 In-store collection at Sheikhpura</span>
        <span style={tag}>💰 Ideal for savings & jewellery</span>
      </div>

      <hr style={hr} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
          alignItems: "stretch",
        }}
      >
        <div style={card}>
          <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>
            Contact
          </div>
          <div>📞 {phone}</div>
        </div>

        <div style={card}>
          <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>
            Store Hours
          </div>
          <div>⏰ {hours}</div>
        </div>

        <div style={card}>
          <div style={{ fontSize: 12, opacity: 0.7, marginBottom: 6 }}>
            Visit Us
          </div>
          <div>📍 <a href="https://maps.app.goo.gl/MKVF9d7RKQxrsSec7?g_st=aw" target="_blank" id="vist">{address}</a></div>
        </div>
      </div>

      <p style={{ marginTop: 16, ...small }}>
        Whether you’re purchasing for savings, investment, or jewellery, Aditya
        Jewellers ensures purity, fair pricing, and complete transparency.
      </p>
    </section>
				<footer>
					<p>© 2025 Aditya Jewellers. All rights reserved.</p>
				</footer>
			</>
  );
}


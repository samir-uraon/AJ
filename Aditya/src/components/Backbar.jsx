// GoBackButton.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Backbar({ label = "Back" }) {
  const btn = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
				margin: "20px 0 0 20px",
    padding: "8px 14px",
    borderRadius: 12,
    border: "1px solid #ddd",
    background: "#dba829ff",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 500,
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "all 0.2s ease",
  };

  const hover = {
    background: "#f9f9f9",
    transform: "translateY(-1px)",
  };

  return (
			<>
			<NavLink to="/">
    <button
      style={btn}
    >
      <span style={{ fontSize: 18 }}>⬅️</span>
      {label}
    </button>
				</NavLink>
			</>
  );
}

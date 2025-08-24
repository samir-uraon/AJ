import { useState } from "react";
import "./css/Login.css"
const adminEmails = ["admin1@gmail.com", "admin2@gmail.com", "admin3@gmail.com"];

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    const isAdmin = adminEmails.includes(email);
    onLogin(email, isAdmin);
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="email" 
        placeholder="Gmail" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

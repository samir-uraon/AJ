import React from 'react';
import { NavLink } from 'react-router-dom';

 
const ErrorPage = () => {
  return (
    <div className="not-found-container" style={{textAlign:"center", padding:"50px"}}>
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="home-link">
          <button className='primary-btn' style={{backgroundColor:"#ecac2aff",padding:"6px 20px", color:"white"}}>Go to Home</button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
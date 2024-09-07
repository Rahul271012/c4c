import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
       
        <img src="/logo192.png" alt="Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/services" className="nav-link">Services</Link></li>
      </ul>
      <button className="login-button">Login</button>
    </nav>
  );
}

export default Navbar;

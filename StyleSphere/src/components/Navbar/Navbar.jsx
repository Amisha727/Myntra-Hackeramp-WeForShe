// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <span className="navbar-language">EN</span>
          <div className="navbar-search-container">
            <input className="navbar-input" placeholder="Search" />
            <span className="navbar-search-icon">🔍</span>
          </div>
        </div>
        <div className="navbar-center">
          <h1 className="navbar-logo">StyleSphere</h1>
        </div>
        <div className="navbar-right">
          <div className="navbar-menu-item">REGISTER</div>
          <div className="navbar-menu-item">SIGN IN</div>
          <div className="navbar-menu-item">
            <span className="navbar-cart-icon">🛒</span>
            <span className="navbar-badge">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import cartIcon from '../assets/icons/Cart1.png';
import accountIcon from '../assets/icons/profile.png';
import SearchIcon from '../assets/icons/search.png';
import wishlistIcon from '../assets/icons/wishlist.png';
import './Header.css'; // Assuming you are using CSS for styling

const Header = () => {
const [scrollPosition, setScrollPosition] = useState(0);

useEffect(() => {
    const handleScroll = () => {
    setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
}, []);

return (
    <header className={`header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
    <div className="header-container">
        <div className="logo">
        <h1>StyleSphere</h1>
        </div>
        <nav className="nav-links">
        <a href="#search"><img src={SearchIcon} alt="Search" className="icon" /></a>
        <a href="#accounts"><img src={accountIcon} alt="Account" className="icon" /></a>
        <a href="#wishlist"><img src={wishlistIcon} alt="Wishlist" className="icon" /></a>
        <a href="#cart"><img src={cartIcon} alt="Cart" className="icon" /></a>
        </nav>
        <div className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
    </div>
    </header>
);
};

export default Header;
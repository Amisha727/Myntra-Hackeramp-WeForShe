import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/icons/Cart1.png';
import accountIcon from '../../assets/icons/profile.png';
import SearchIcon from '../../assets/icons/search.png';
import StyleSphereLogo from '../../assets/icons/StyleSphere.png';
import wishlistIcon from '../../assets/icons/wishlist.png';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import Slider from '../Slider/Slider';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    phone: '123-456-7890',
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted:', searchQuery);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="left-section">
          <div className="logo">
            <a href="#stylesphere">
              <img src={StyleSphereLogo} alt="StyleSphere" className="icon" />
            </a>
          </div>
        </div>
        <div className="center-section">
          <h2 className="navbar-heading">StyleSphere</h2>
        </div>
        <div className="right-section">
          <div className="search-section">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit">
                <img src={SearchIcon} alt="Search" className="search-icon" />
              </button>
            </form>
          </div>
          <nav className="nav-links">
            {isLoggedIn ? (
              <div
                className="nav-item"
              >
                <a href="#accounts">
                  <img src={accountIcon} alt="Account" className="icon" />
                  <span>Profile</span>
                </a>
                <ProfileDropdown
                  name={profile.name}
                  phone={profile.phone}
                  onLogout={handleLogout}
                />
              </div>
            ) : (
              <Link to="/login" className="nav-item">
                Login / Sign-Up
              </Link>
            )}
            <div className="nav-item">
              <a href="#wishlist">
                <img src={wishlistIcon} alt="Wishlist" className="icon" />
                <span>Wishlist</span>
              </a>
            </div>
            <div className="nav-item">
              <a href="#cart">
                <img src={cartIcon} alt="Cart" className="icon" />
                <span>Bag</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <Slider />
    </header>
  );
};

export default Header;

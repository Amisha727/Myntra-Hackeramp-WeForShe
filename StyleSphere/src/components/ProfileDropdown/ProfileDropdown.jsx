import React from 'react';
import './ProfileDropdown.css';

const ProfileDropdown = ({ name, phone, onLogout }) => {
  return (
    <div className="profile-dropdown">
      <p>Hello {name}</p>
      <p>{phone}</p>
      <a href="#orders">Orders</a>
      <a href="#wishlist">Wishlist</a>
      <a href="#gift-cards">Gift Cards</a>
      <a href="#contact-us">Contact Us</a>
      <a href="#insider">StyleSphere InsiderNew</a>
      <a href="#credit">StyleSphere Credit</a>
      <a href="#coupons">Coupons</a>
      <a href="#saved-cards">Saved Cards</a>
      <a href="#saved-vpa">Saved VPA</a>
      <a href="#saved-addresses">Saved Addresses</a>
      <a href="#edit-profile">Edit Profile</a>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default ProfileDropdown;

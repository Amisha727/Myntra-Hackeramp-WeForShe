// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="logo">LAMA.</h1>
        <p className="desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="social-container">
          <div className="social-icon facebook">
            F
          </div>
          <div className="social-icon instagram">
            I
          </div>
          <div className="social-icon twitter">
            T
          </div>
          <div className="social-icon pinterest">
            P
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="title">Useful Links</h3>
        <ul className="list">
          <li className="list-item">Home</li>
          <li className="list-item">Cart</li>
          <li className="list-item">Man Fashion</li>
          <li className="list-item">Woman Fashion</li>
          <li className="list-item">Accessories</li>
          <li className="list-item">My Account</li>
          <li className="list-item">Order Tracking</li>
          <li className="list-item">Wishlist</li>
          <li className="list-item">Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="title">Contact</h3>
        <div className="contact-item">
          <span className="contact-icon">📍</span> 622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="contact-item">
          <span className="contact-icon">📞</span> +1 234 56 78
        </div>
        <div className="contact-item">
          <span className="contact-icon">📧</span> contact@lama.dev
        </div>
        <img className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment Methods" />
      </div>
    </div>
  );
};

export default Footer;

// src/pages/Register.jsx
import React from 'react';
import './Register.css'; // Import the CSS file

const Register = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form">
          <input className="input" placeholder="name" />
          <input className="input" placeholder="last name" />
          <input className="input" placeholder="username" />
          <input className="input" placeholder="email" />
          <input className="input" placeholder="password" />
          <input className="input" placeholder="confirm password" />
          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="button">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

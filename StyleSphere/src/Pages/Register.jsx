// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Register.css'; // Import the CSS file

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
    // After successful registration, navigate to the login page
    navigate("/login");
  };

  return (
    <>
    <Header />
    <div className="container">
      <div className="wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form" onSubmit={handleRegister}>
          <input
            className="input"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="input"
            placeholder="confirm password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <span className="agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="button" type="submit">CREATE</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Register;

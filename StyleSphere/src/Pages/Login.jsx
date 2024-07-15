// src/Pages/Login.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password }).then(() => {
      navigate('/');
    });
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="login-title">SIGN IN</h1>
        <form className="login-form">
          <input
            className="login-input"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-input"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login-button"
            onClick={handleLogin}
            disabled={isFetching}
          >
            LOGIN
          </button>
          {error && <span className="login-error">Something went wrong...</span>}
          <a className="login-link">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className="login-link" onClick={handleRegister}>CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;

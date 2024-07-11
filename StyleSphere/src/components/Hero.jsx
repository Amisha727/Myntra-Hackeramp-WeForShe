// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img src="/assets/hero.jpg" alt="Hero" />
      <div className="hero-text">
        <h1>Welcome to StyleSphere</h1>
        <p>Discover our new collection</p>
      </div>
    </section>
  );
};

export default Hero;

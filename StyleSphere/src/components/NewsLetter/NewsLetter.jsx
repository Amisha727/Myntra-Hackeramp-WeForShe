import { Send } from "@material-ui/icons";
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Newsletter</h1>
      <div className="newsletter-desc">Get timely updates from your favorite products.</div>
      <div className="newsletter-input-container">
        <input className="newsletter-input" placeholder="Your email" />
        <button className="newsletter-button">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

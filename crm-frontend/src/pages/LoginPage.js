import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome to Xeno CRM</h1>
        <p className="login-text">Log in to manage your customers effectively.</p>
        <a href="/dashboard" className="login-button">
          Continue
        </a>
        <div className="help-text">
          Need help? <a href="/support">Contact Support</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


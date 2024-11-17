import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>Welcome to Xeno CRM</h1>
        <p>Your ultimate solution for customer relationship management.</p>
        <Link to="/login" className="cta-button">
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Streamlined Workflow</h3>
            <p>
              Organize your customer data and manage tasks effortlessly with our intuitive CRM tools.
            </p>
          </div>
          <div className="feature-card">
            <h3>Data-Driven Insights</h3>
            <p>
              Make informed decisions with our analytics and reporting features.
            </p>
          </div>
          <div className="feature-card">
            <h3>Customizable Dashboard</h3>
            <p>
              Tailor the CRM experience to fit your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Why Choose Xeno CRM?</h2>
        <ul className="benefits-list">
          <li>✔ Enhance Customer Engagement</li>
          <li>✔ Boost Sales Efficiency</li>
          <li>✔ Drive Business Growth</li>
          <li>✔ Secure and Reliable</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <blockquote>
            "Xeno CRM transformed our customer engagement strategy and boosted our sales!"
            <cite> - Jane Doe, CEO of ABC Corp</cite>
          </blockquote>
          <blockquote>
            "The data insights provided by Xeno CRM are unparalleled!"
            <cite> - John Smith, Marketing Manager</cite>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Xeno CRM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;


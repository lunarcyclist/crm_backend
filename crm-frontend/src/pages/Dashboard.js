import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Xeno CRM Dashboard</h1>
        <p>
          Explore the features of Xeno CRM to enhance your customer relationship
          management and drive business success.
        </p>
      </header>
      <section className="dashboard-features">
        <div className="feature-card">
          <h2>Customer Management</h2>
          <p>Add, view, and manage your customers efficiently.</p>
          <Link to="/customers" className="feature-link">Manage Customers</Link>
        </div>
        <div className="feature-card">
          <h2>Audience Segments</h2>
          <p>
            Define and analyze audience segments to target campaigns
            effectively.
          </p>
          <Link to="/segments" className="feature-link">Manage Segments</Link>
        </div>
        <div className="feature-card">
          <h2>Campaigns</h2>
          <p>
            Create and track your marketing campaigns to maximize ROI.
          </p>
          <Link to="/campaigns" className="feature-link">Manage Campaigns</Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

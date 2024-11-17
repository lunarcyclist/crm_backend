import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Dashboard</Link>
      <Link to="/customers" className="nav-link">Customer Management</Link>
      <Link to="/segments" className="nav-link">Audience Segments</Link>
      <Link to="/campaigns" className="nav-link">Campaigns</Link>
    </nav>
  );
};

export default Navbar;

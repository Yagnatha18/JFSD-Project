// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS for navigation

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

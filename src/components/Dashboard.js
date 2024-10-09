// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import CSS for Dashboard component

const Dashboard = () => {
  const messages = [
    "Welcome to the Dashboard!",
    "Don't forget to participate in upcoming events.",
    "Check your notifications for the latest updates.",
    "Feel free to reach out to your representatives with your concerns."
  ];

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

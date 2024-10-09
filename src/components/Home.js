// src/components/Home.js
import React from 'react';
import './Home.css'; // Import CSS for Home component

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Communication Portal</h1>
      <p>
        This portal is designed to facilitate communication between citizens and politicians.
      </p>
      <p>
        Here you can find various resources, submit feedback, and stay updated with the latest news.
      </p>
    </div>
  );
};

export default Home;

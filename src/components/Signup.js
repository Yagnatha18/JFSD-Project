// src/components/Signup.js
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Here you would typically handle signup logic
    // For this example, we'll just simulate a successful signup
    if (username && email && password) {
      setMessage(`Welcome, ${username}! You have successfully signed up.`);
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {message && <div className="success-message">{message}</div>}
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose a password"
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { FaUser, FaLock } from "react-icons/fa";
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      navigate('/profile', { state: { username } });
    } else {
      alert("Enter a valid username.");
    }
  };
  return (
    <div className='App'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
          <a href="#">forgot password</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const matchedUser = users.find((user) => user.username === username);
    const validPassword = `${username}@123`;

    if (matchedUser && password === validPassword) {

      localStorage.setItem('user', JSON.stringify(matchedUser));
      navigate('/profile');
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className='login-bg'>
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
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className='icon' />
        </div>

        <div className="remember-forgot">
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;

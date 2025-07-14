
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { FaUser, FaLock } from "react-icons/fa";

const users = [
  {  username: "Bret"},
  {  username: "Antonette" },
  {  username: "Samantha" },
  {  username: "Karianne" },
  {  username: "Kamren" },
  {  username: "Leopoldo_Corkery" },
  {  username: "Elwyn.Skiles" },
  {  username: "Maxime_Nienow" },
  {  username: "Delphine" },
  {  username: "Moriah.Stanton" }
];

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

  
    const validUser = users.find(user => user.username === username);

    if (validUser && password === `${username}@123`) {
      navigate('/profile', { state: { username } });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className='App'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
          <FaUser className='icon' />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
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
  );
};

export default LoginPage;

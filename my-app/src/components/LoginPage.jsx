import React, { useState } from 'react';
import '../App.css';

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
const LoginPage = () => {
  return (
    <div className='App'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='username' required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
         <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <a href="#">forgot password</a>
        </div>
        <button type="submit">login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage ;
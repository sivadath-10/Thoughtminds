import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Header.css';
import { getInitials } from '../function/getInitials.js';

const Header = ({user}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');

    };
    

    return (
    <nav className="header">
      <div className="user-info">
        <div className="user-avatar">{getInitials(user?.name)}</div>
        
        <span className="user-name">{user?.name}</span>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
    );
};
export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Header.css';
import { getInitials } from '../function/getInitials.js';

const Header = ({ user }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        navigate('/');
    };
    const handleMyPost = () => {
    navigate('/myposts');
    };
    

    return (
    <nav className="header">
      <div className="user-info">
        <div className="user-avatar">{getInitials(user?.name)}</div>
        
        <span className="user-name">{user?.name}</span>
      </div >
      <div className="Header-buttons">
        <button className="my-post-button" onClick={handleMyPost}>My Post</button>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
     </div>

    </nav>
    );
};
export default Header;

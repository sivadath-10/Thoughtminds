import React from "react";
import { useNavigate } from "react-router-dom";
import '../Header.css';

const Header = ({user}) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');

    };
    
    const getInitials = (name) =>{
        if (!name) return '';
       const nameParts = name.trim().split(' ');
    return nameParts[0][0].toUpperCase() + (nameParts[1]?.[0]?.toUpperCase() || '');
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

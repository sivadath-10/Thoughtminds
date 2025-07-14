import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || {};

  useEffect(() => {
    if (!username) {
      navigate('/');
    }
  }, [username, navigate]);

  return (
    <div className="App">
      <h1>Welcome to your Profile</h1>
      <h2>Hello, {username}
        
      </h2>
    </div>
  );
};

export default ProfilePage;

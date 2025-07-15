import React from 'react';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div className="App">
      <h1>Welcome to your Profile</h1>
    </div>
  );
};

export default ProfilePage;
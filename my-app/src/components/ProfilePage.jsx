import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../profile.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('API Error:', err));
  }, []);

  if (!user) return <p>Loading...</p>;

  const getInitials = (fullName) => {
    if (!fullName) return '?';
    const parts = fullName.trim().split(' ');
    const first = parts[0]?.charAt(0).toUpperCase() || '';
    const last = parts[1]?.charAt(0).toUpperCase() || '';
    return first + last;
  };

  const handleLogout = () => {

   navigate('/LoginPage.jsx')
  };

  return (
    <>

      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-avatar">{getInitials(user.name)}</div>
          <span className="navbar-username">{user.name}</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="profilepage">
        <div className="profile-sidebar">
          <div className="initial-avatar">
            {getInitials(user.name)}
          </div>
          <p>{user.name}</p>
          <p className="avatar-note">Your profile initials</p>
        </div>

        <div className="profile-details">
          <h2>Account Details</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <form className="details-form">
            <div className="form-row">
              <label>First Name</label>
              <input type="text" value={user.name.split(' ')[0]} readOnly />
              <label>Second Name</label>
              <input type="text" value={user.name.split(' ')[1] || ''} readOnly />
            </div>

            <div className="form-row">
              <label>Email ID</label>
              <input type="text" value={user.email} readOnly />
              <label>City</label>
              <input type="text" value={user.address.city} readOnly />
            </div>

            <div className="form-row">
              <label>Phone Number</label>
              <input type="text" value={user.phone} readOnly />
              <label>Zipcode</label>
              <input type="text" value={user.address.zipcode} readOnly />
            </div>

            <div className="form-row">
              <label>Street</label>
              <input type="text" value={user.address.street} readOnly />
              <label>Suite</label>
              <input type="text" value={user.address.suite} readOnly />
            </div>

            <div className="form-row">
              <label>Website</label>
              <input type="text" value={user.website} readOnly />
              <label>Company Name</label>
              <input type="text" value={user.company.name} readOnly />
            </div>

            <div className="form-row">
              <label>Catch Phrase</label>
              <input type="text" value={user.company.catchPhrase} readOnly />
              <label>Company BS</label>
              <input type="text" value={user.company.bs} readOnly />
            </div>

            <div className="form-row">
              <label>Geo Lat</label>
              <input type="text" value={user.address.geo.lat} readOnly />
              <label>Geo Lng</label>
              <input type="text" value={user.address.geo.lng} readOnly />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

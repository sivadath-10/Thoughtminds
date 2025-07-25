import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { getUserFromStorage } from '../function/Utils.js';
import '../styles/profile.css';

const ProfileField = ({ label, value }) => (
  <div className="profile-field">
    <label>{label}</label>
    <input type="text" value={value} readOnly />
  </div>
);

const InitialCircle = ({ initials }) => (
  <div className="initial-circle">
    {initials}
  </div>
);

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
  const storedUser = getUserFromStorage();
  console.log("Stored user from localStorage:", storedUser); // ✅ Debug here

  if (!storedUser) {
    navigate('/');
  } else {
    setUser(storedUser);
  }
}, [navigate]);


  if (!user) {
    return <div className="loading">Loading profile...</div>;
  }

  const nameParts = user.name.split(' ');
  const initials = nameParts.map(part => part[0]).join('').toUpperCase();

  return (
  <div className="profile-page">
    <Header user={user}></Header>
    <div className="profile-container">
      <div className="profile-left">
        <InitialCircle initials={initials} />
        <h2>{user.name}</h2>
        <p>Your profile initials</p>
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
      </div>
     
  );
};

export default Profile;

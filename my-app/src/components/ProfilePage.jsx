// import React, { useEffect, useState } from 'react';
// import '../profile.css';

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(res => res.json())
//       .then(data => setUser(data))
//       .catch(err => console.error('API Error:', err));
//   }, []);

//   if (!user) return <p>Loading...</p>;

//   const getInitials = (fullName) => {
//     if (!fullName) return '?';
//     const parts = fullName.trim().split(' ');
//     const first = parts[0]?.charAt(0).toUpperCase() || '';
//     const last = parts[1]?.charAt(0).toUpperCase() || '';
//     return first + last;
//   };

//   return (
//     <div className="profile-wrapper">
//       <div className="profile-sidebar">
//         <div className="initial-avatar">
//           {getInitials(user.name)}
//         </div>
//         <p>{user.name}</p>
//         <p className="avatar-note">Your profile initials</p>
//       </div>

//       <div className="profile-details">
//         <h2>Account Details</h2>
//         <p><strong>Username:</strong> {user.username}</p>
//         <form className="details-form">
//           <div className="form-row">
//             <input type="text" value={user.name.split(' ')[0]} readOnly />
//             <input type="text" value={user.name.split(' ')[1] || ''} readOnly />
//           </div>
//           <div className="form-row">
//             <input type="text" value={user.email} readOnly />
//             <input type="text" value={user.address.city} readOnly />
//           </div>
//           <div className="form-row">
//             <input type="text" value={user.phone} readOnly />
//             <input type="text" value={user.address.zipcode} readOnly />
//           </div>
//           <button className="save-btn">Save changes</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
//  import React, { useEffect, useState } from 'react';
//  import '../profile.css';


//  const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then(res => res.json())
//       .then(data => setUser(data))
//        .catch(err => console.error('API Error:', err));
//    }, []);

//    if (!user) return <p>Loading...</p>;

//    const getInitials = (fullName) => {
//      if (!fullName) return '?';
//      const parts = fullName.trim().split(' ');
//      const first = parts[0]?.charAt(0).toUpperCase() || '';
//      const last = parts[1]?.charAt(0).toUpperCase() || '';
//      return first + last;
//    };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <div className="profile-avatar">{getInitials(user.name)}</div>
//         <h1>{user.name}</h1>
//       </div>
      
//       <p><strong>Username:</strong> {user.username}</p>
//       <p><strong>Email:</strong> {user.email}</p>
      
//       <h2>Address</h2>
//       <p>{user.address.street}, {user.address.suite}</p>
//       <p>{user.address.city} - {user.address.zipcode}</p>
//       <p><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>

//       <h2>Contact</h2>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Website:</strong> {user.website}</p>

//       <h2>Company</h2>
//       <p><strong>Name:</strong> {user.company.name}</p>
//       <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
//       <p><strong>Business:</strong> {user.company.bs}</p>
//     </div>
//   );
// };

// export default ProfilePage;
import React, { useEffect, useState } from 'react';
import '../profile.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

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

  return (
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
             <label>first name</label>
            <input type="text" value={user.name.split(' ')[0]} readOnly />
            <label>secont name</label>
            <input type="text" value={user.name.split(' ')[1] || ''} readOnly />
          </div>

          <div className="form-row">
            <label>Email id</label>
            <input type="text" value={user.email} readOnly />
            <label>City</label>
            <input type="text" value={user.address.city} readOnly />
          </div>

          <div className="form-row">
            <label>phone number</label>
            <input type="text" value={user.phone} readOnly />
            <label>Zipcode</label>
            <input type="text" value={user.address.zipcode} readOnly />
          </div>

          <div className="form-row">
            <label>street</label>
            <input type="text" value={user.address.street} readOnly />
            <label>suite</label>
            <input type="text" value={user.address.suite} readOnly />
          </div>

          <div className="form-row">
            <label>Website</label>
            <input type="text" value={user.website} readOnly />
            <label>Company Name</label>
            <input type="text" value={user.company.name} readOnly />
          </div>

          <div className="form-row">
            <label> catchPhrase</label>
            <input type="text" value={user.company.catchPhrase} readOnly />
            <label>company bs</label>
            <input type="text" value={user.company.bs} readOnly />
          </div>

          <div className="form-row">
            <label>Geo lat</label>
            <input type="text" value={user.address.geo.lat} readOnly />
            <label>geo ing</label>
            <input type="text" value={user.address.geo.lng} readOnly />
          </div>

          {/* <button className="save-btn">Save changes</button> */}
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;

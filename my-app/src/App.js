import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import mypost from './components/MyPost.jsx'
import MyPost from './components/MyPost.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
       <Route path="/mypost" element={<MyPost />} />
      </Routes>
    </Router>
  );
}

export default App;
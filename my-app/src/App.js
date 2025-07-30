import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import MyPost from './components/MyPost.jsx';
import AllPosts from './components/AllPost.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mypost" element={<MyPost />} />
        <Route path="/allpost" element={<AllPosts />} />
      </Routes>
    </Router>
  );
}

export default App;

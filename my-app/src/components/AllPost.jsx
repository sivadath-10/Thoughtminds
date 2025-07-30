import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getUserFromStorage } from '../function/Utils';
import { fetchAllPostsExceptUser } from '../function/fetchPosts';
import '../styles/AllPost.css'

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const user = getUserFromStorage();

  useEffect(() => {
    if (user?.id) {
      fetchAllPostsExceptUser(user.id).then(setPosts);
    }
  }, [user]);

  return (
    <div className="all-posts-page">
      <Header user={user} />
      <h2>All Posts (excluding yours)</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="post-list">
          {posts.map(post => (
  <li key={post.id} className="post-item">
    <div className="post-user-name">
      {post.userName || 'Unknown User'}
    </div>
    <strong>{post.title}</strong>
    <p>{post.body}</p>
  </li>
))}

        
        </ul>
      )}
    </div>
  );
};

export default AllPosts;

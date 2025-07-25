import React, { useEffect, useState } from 'react';
import { getUserPosts } from '../function/getUserPosts';
import '../styles/mypost.css';

const MyPost = () => {
  const [posts, setPosts] = useState([]); 
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user || !user.id) return;

      const userPosts = await getUserPosts(user.id);
      setPosts(userPosts);
    };

    fetchPosts();
  }, []);

  return (

    <div className="posts-container">
      <h2>{user?.name}'s Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="post-card">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts found for this user.</p>
      )}
    </div>
  );
};

export default MyPost;

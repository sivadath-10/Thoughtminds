// src/function/getUserPosts.js
export const getUserPosts = async (userId) => {
  if (!userId) {
    console.warn('No userId provided to getUserPosts');
    return [];
  }

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.filter(post => post.userId === userId);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
};

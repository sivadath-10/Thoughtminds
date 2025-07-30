export const fetchAllPostsExceptUser = async (userId) => {
  try {
    const [postsResponse, usersResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users')
    ]);

    const posts = await postsResponse.json();
    const users = await usersResponse.json();
    const filteredPosts = posts.filter(post => post.userId !== userId);
    const postsWithUserNames = filteredPosts.map(post => {
      const user = users.find(u => u.id === post.userId);
      return {
        ...post,
        userName: user ? user.name : 'Unknown User'
      };
    });

    return postsWithUserNames;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

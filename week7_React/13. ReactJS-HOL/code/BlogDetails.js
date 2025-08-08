import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'Getting Started with React', views: 1023 },
    { id: 2, title: 'Understanding JSX', views: 857 },
    { id: 3, title: 'React Hooks in Depth', views: 1420 }
  ];

  return (
    <div>
      <h2>📰 Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title} — Views: {blog.views}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;

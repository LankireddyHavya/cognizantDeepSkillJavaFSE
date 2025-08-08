import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeView, setActiveView] = useState('books');
  const [showExtra, setShowExtra] = useState(false);

  let content;
  if (activeView === 'books') {
    content = <BookDetails />;
  } else if (activeView === 'blogs') {
    content = <BlogDetails />;
  } else if (activeView === 'courses') {
    content = <CourseDetails />;
  }

  return (
    <div className="App">
      <h1>🧠 Blogger App - Conditional Rendering Demo</h1>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setActiveView('books')}>Show Books</button>
        <button onClick={() => setActiveView('blogs')}>Show Blogs</button>
        <button onClick={() => setActiveView('courses')}>Show Courses</button>
        <button onClick={() => setShowExtra(!showExtra)}>Toggle Extra Message</button>
      </div>

      {content}

      <div>
        <p>{activeView === 'books' ? 'Viewing books' : 'Not viewing books'}</p>
      </div>

      {showExtra && <p style={{ color: 'blue' }}>This is an extra note shown using && operator!</p>}
    </div>
  );
}

export default App;

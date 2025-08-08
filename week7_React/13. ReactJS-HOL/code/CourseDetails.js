import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 'c1', name: 'React Basics', duration: '6 weeks' },
    { id: 'c2', name: 'Advanced JavaScript', duration: '8 weeks' }
  ];

  return (
    <div>
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - Duration: {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;

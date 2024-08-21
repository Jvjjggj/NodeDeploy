// src/components/MentorList.js

import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3010/mentors')
      .then(response => response.json())
      .then(data => setMentors(data.data))
      .catch(error => console.error('Error fetching mentors:', error));
  }, []);

  return (
    <div className="mentor-list">
      <h2>Available Mentors</h2>
      <div className="mentors">
        {mentors.map(mentor => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default MentorList;

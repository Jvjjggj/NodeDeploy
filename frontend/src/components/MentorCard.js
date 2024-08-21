// src/components/MentorCard.js

import React from 'react';

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <h3>{mentor.name}</h3>
      <p>Expertise: {mentor.areas_of_expertise}</p>
      <p>Availability: {mentor.availability}</p>
      <p>{mentor.is_premium ? 'Premium Mentor' : 'Standard Mentor'}</p>
    </div>
  );
};

export default MentorCard;

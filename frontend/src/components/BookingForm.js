// src/components/BookingForm.js

import React, { useState } from 'react';

const BookingForm = () => {
  const [studentId, setStudentId] = useState('');
  const [mentorId, setMentorId] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      student_id: parseInt(studentId, 10),
      mentor_id: parseInt(mentorId, 10),
      time: time
    };

    fetch('http://localhost:3010/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'success') {
        alert('Booking successful!');
      } else {
        alert('Booking failed: ' + data.error);
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="booking-form">
      <h2>Book a Session</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID:</label>
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
        </div>
        <div>
          <label>Mentor ID:</label>
          <input type="text" value={mentorId} onChange={(e) => setMentorId(e.target.value)} required />
        </div>
        <div>
          <label>Time (HH:MM):</label>
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <button type="submit">Book Session</button>
      </form>
    </div>
  );
};

export default BookingForm;

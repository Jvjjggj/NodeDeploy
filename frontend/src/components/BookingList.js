// src/components/BookingList.js

import React, { useEffect, useState } from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3010/bookings')
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') {
          setBookings(data.data); // Set the bookings data
        } else {
          setError('Failed to fetch bookings');
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching bookings: ' + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="booking-list">
      <h2>All Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            Student ID: {booking.student_id} | Mentor ID: {booking.mentor_id} | Time: {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;

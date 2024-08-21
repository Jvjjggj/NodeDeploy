// src/App.js

import React from 'react';
import MentorList from './components/MentorList';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList'; // Import BookingList
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mentor Booking Application</h1>
      </header>
      <main>
        <MentorList />
        <BookingForm />
        <BookingList /> 
      </main>
    </div>
  );
}

export default App;

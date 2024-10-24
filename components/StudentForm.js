/*
 * StudentForm Component
 * This component provides a form for adding a new student.
 * The form includes validation to ensure that all fields are filled in before submission.
 */
"use client"; // Ensure it's treated as a client component

import { useState } from 'react';

export default function StudentForm({ onAddStudent }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Ensure all fields are filled
    if (!firstName || !lastName || !dob || !grade) {
      alert('All fields are required!');
      return;
    }

    // Create a new student object
    const newStudent = {
      id: Date.now(), // Unique ID for the student
      firstName,
      lastName,
      dob,
      grade: parseInt(grade),
    };

    // Call the parent function to add the new student
    onAddStudent(newStudent);

    // Reset the form fields
    setFirstName('');
    setLastName('');
    setDob('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

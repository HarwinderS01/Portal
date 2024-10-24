/*
 * Student Portal - Main Page
 * Program Description: This is the main page of the student portal for New Generation High School. It displays a list of students,
 * allows the administrator to add new students via a form, and includes data validation for form inputs.
 * Inputs: Student's first name, last name, date of birth, and grade.
 * Output: Displays the updated student list with new entries added.
*/
"use client"; // Ensure client-side rendering is enabled

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';
import Footer from '../components/Footer';

export default function Home() {
  const [students, setStudents] = useState([]);

  // Fetch initial students from students.json
  useEffect(() => {
    fetch('/students.json')
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  // Function to add a new student to the list
  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <StudentForm onAddStudent={addStudent} />
        <StudentList students={students} />
      </main>
      <Footer />
    </div>
  );
}

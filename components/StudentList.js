/*
 * StudentList Component
 * This component displays the list of students. It receives the student data from the parent component (Home page) as a prop.
 */
"use client"; // Ensure client-side rendering

export default function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName} - Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

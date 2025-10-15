// src/App.jsx
import Welcome from "./components/welcome";

function App() {
  const students = ["Steven", "Anjali", "Rahul", "Priya"];

  return (
    <div>
      <h1>Student Dashboard</h1>
      {students.map((student, idx) => (
        <Welcome key={idx} name={student} />
      ))}
    </div>
  );
}

export default App;
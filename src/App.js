import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css"; // Import the CSS file

// Home
function HomePage() {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>We're happy you're here. Explore and enjoy!</p>
    </div>
  );
}

//propspage
function PropsPage({ message }) {
  return (
    <div className="container">
      <h1> Stay Organized</h1>
      <p>
        {" "}
        Keep track of your tasks effortlessly with this simple to-do list. Add,
        and check off items as you complete them to stay productive and
        organized. Whether it's daily chores, work assignments, or personal
        goals, this to-do list helps you stay on top of everything with ease.
      </p>
    </div>
  );
}

// todolist
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task"
        className="input"
      />
      <button onClick={handleAddTask} className="button">
        Add Task
      </button>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index} className="listItem">
            {task}
            <button
              onClick={() => handleRemoveTask(index)}
              className="deleteButton"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// navbar
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/props" className="link">
        Props Page
      </Link>
      <Link to="/todo" className="link">
        Todo List
      </Link>
    </nav>
  );
}

// mainapp
export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/props" element={<PropsPage message="Hello World!" />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

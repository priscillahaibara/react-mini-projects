import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([])

  function handleAddTasks(task) {
    setTasks([...tasks, task])
  }
  
  return (
    <>
      <Header />
      <Input onAddTasks={handleAddTasks}/>
      <TaskList tasks={tasks}/>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>To-do List</h1>
    </div>
  );
}

function Input({ onAddTasks }) {
  const [input, setInput] = useState('');
  
  function handleClick() {
    if (input.trim() === '') return;

    onAddTasks(input);
    setInput('');
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add your task..."
        className="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="add-button" onClick={handleClick}>Add</button>
    </div>
  );
}

function TaskList({ tasks }) {
  return(
    <div className="results-container">
      <ul className="list-container">
        {tasks.map((task, index) => (
          <li key={index} className="list-item">{task} 
          <button className="button-delete">❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return(
    <div className="footer">
      You have completed X tasks
    </div>
  )
}
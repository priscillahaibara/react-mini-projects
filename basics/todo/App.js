import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(taskToDelete) {
    const filteredTask = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(filteredTask)
  }

  return (
    <>
      <Header />
      <Input onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
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
  const [input, setInput] = useState("");

  function handleClick() {
    if (input.trim() === "") return;

    const newTask = { description: input, completed: false, id: Date.now() };

    onAddTasks(newTask);
    setInput("");
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
      <button className="add-button" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="results-container">
      <ul className="list-container">
        {tasks.map((task) => (
          <li key={task.id} className="list-item">
            {task.description}
            <button
              className="button-delete"
              onClick={() => onDeleteTask(task.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return <div className="footer">You have completed X tasks</div>;
}

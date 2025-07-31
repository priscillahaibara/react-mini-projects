import { useState } from "react";
import Header from './components/Header.js'
import Input from "./components/Input.js";
import TaskList from "./components/TaskList.js";
import Footer from "./components/Footer.js";

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


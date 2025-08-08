import { useState } from "react";
import Header from './components/Header.js'
import Input from "./components/Input.js";
import TaskList from "./components/TaskList.js";
import Footer from "./components/Footer.js";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const completedCount = tasks.filter((task) => task.completed).length;

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(taskToDelete) {
    const filteredTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(filteredTasks)
  }

  function toggleTaskCompleted(taskCompleted) {
    const updatedTasks = tasks.map((task) => task.id === taskCompleted ? {...task, completed: !task.completed} : task);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <Input onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onTaskCompleted={toggleTaskCompleted}/>
      <Footer completedCount={completedCount}/>
    </>
  );
}



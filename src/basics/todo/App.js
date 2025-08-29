import { useState } from "react";
import PageNav from "../../components/PageNav.js";
import Header from "./components/Header.js";
import Input from "./components/Input.js";
import TaskList from "./components/TaskList.js";
import Footer from "./components/Footer.js";
import styles from './App.module.css'

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const completedCount = tasks.filter((task) => task.completed).length;

  function handleAddTask(task) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(taskToDelete) {
    const filteredTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(filteredTasks);
  }

  function toggleTaskCompleted(taskCompleted) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskCompleted ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <main className={styles.main}>
      <PageNav />
      <Header />
      <Input onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onTaskCompleted={toggleTaskCompleted}
      />
      <Footer completedCount={completedCount} />
    </main>
  );
}

import { useState } from "react";
import PageNav from "../../../components/PageNav";
import Header from "./components/Header";
import Input from "./components/Input";
/* import TaskList from "./components/TaskList"; */
import Footer from "./components/Footer";
import styles from "./App.module.css";
import TaskList from "./components/TaskList";

  interface Task {
    id: number,
    description: string, 
    completed: boolean,
  }

export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
 
  /* const completedCount = tasks.filter((task) => task.completed).length;

 
  function handleDeleteTask(taskId: number) {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  function toggleTaskCompleted(taskId: number) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  } */

  return (
    <main className={styles.main}>
      <PageNav />
      <Header />
      <Input tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks}/>
      {/* <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onTaskCompleted={toggleTaskCompleted}
      />
      <Footer completedCount={completedCount} /> */}
    </main>
  );
}

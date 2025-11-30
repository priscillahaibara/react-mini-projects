import styles from "../App.module.css";
import { useState } from "react";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface inputProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function Input({ tasks, setTasks }: inputProps) {
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim() === "") return;

    const newTask = { id: Date.now(), description: input, completed: false };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Add your task..."
        className="task-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className={styles.addButton} onClick={addTask}>
        Add
      </button>
    </div>
  );
}

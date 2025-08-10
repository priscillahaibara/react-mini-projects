import styles from '../App.module.css';
import { useState } from "react";

export default function Input({ onAddTask }) {
  const [input, setInput] = useState("");

  function handleClick() {
    if (input.trim() === "") return;

    const newTask = { description: input, completed: false, id: Date.now() };

    onAddTask(newTask);
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
      <button className={styles.addButton} onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
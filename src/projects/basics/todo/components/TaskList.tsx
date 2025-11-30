import styles from "../App.module.css";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

interface inputProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TaskList({ tasks, setTasks }: inputProps) {
  function toggleTaskCompleted(taskId: number) {
    const updatedTasks = tasks.map((task) =>
      taskId === task.id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  function deleteTask(taskId: number) {
    const filteredTasks = tasks.filter(task => taskId !== task.id);
    setTasks(filteredTasks)
  }

  return (
    <div className={styles.resultsContainer}>
      <ul className={styles.listContainer}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.listItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompleted(task.id)}
            />
            <span className={task.completed ? styles.taskCompleted : ""}>
              {task.description}
            </span>
            <button
              className={styles.buttonDelete}
              onClick={() => deleteTask(task.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

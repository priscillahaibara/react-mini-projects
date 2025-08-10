import styles from '../App.module.css';

export default function TaskList({ tasks, onDeleteTask, onTaskCompleted }) {
  return (
    <div className={styles.resultsContainer}>
      <ul className={styles.listContainer}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.listItem}>
            <input type="checkbox" onChange={() => onTaskCompleted(task.id)} />
            <span className={task.completed ? 'taskCompleted' : ''}>{task.description}</span>
            <button
              className={styles.buttonDelete}
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

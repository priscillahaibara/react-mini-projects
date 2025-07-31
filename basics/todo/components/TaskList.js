export default function TaskList({ tasks, onDeleteTask, onTaskCompleted }) {
  return (
    <div className="results-container">
      <ul className="list-container">
        {tasks.map((task) => (
          <li key={task.id} className="list-item">
            <input type="checkbox" onChange={() => onTaskCompleted(task.id)} />
            <span className={task.completed ? 'task-completed' : ''}>{task.description}</span>
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

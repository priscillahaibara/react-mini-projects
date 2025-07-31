export default function TaskList({ tasks, onDeleteTask }) {
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
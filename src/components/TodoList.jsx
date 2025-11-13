export default function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-center text-muted">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
            onClick={() => onToggle(task.id)}
          >
            {task.text}
          </span>
          
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

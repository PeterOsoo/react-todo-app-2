import { useState } from "react";

export default function TodoList({ tasks, onToggle, onDelete }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  if (tasks.length === 0) {
    return <p className="text-center text-muted">No tasks yet. Add one above!</p>;
  }

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleSave = (id) => {
    if (!editText.trim()) return;
    tasks.forEach((t) => {
      if (t.id === id) t.text = editText; // update text
    });
    setEditId(null);
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "list-group-item-success" : ""
          }`}
        >
          {editId === task.id ? (
            <div className="d-flex flex-grow-1 me-2">
              <input
                type="text"
                className="form-control me-2"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                className="btn btn-sm btn-success"
                onClick={() => handleSave(task.id)}
              >
                Save
              </button>
            </div>
          ) : (
            <span
              style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
              onClick={() => onToggle(task.id)}
              onDoubleClick={() => handleEdit(task)} // double-click to edit
            >
              {task.text}
            </span>
          )}
          {editId !== task.id && (
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

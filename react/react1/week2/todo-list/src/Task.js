import React from "react";

function Task({ task, handleCheck, handleDelete }) {
  return (
    <li className="task" key={task.id}>
      <input
        className="task-completed-checkbox"
        type="checkbox"
        onChange={() => handleCheck(task.id)}
        checked={task.completed}
      />

      <p
        onClick={() => handleCheck(task.id)}
        style={task.completed ? { textDecoration: "line-through" } : null}
      >
        {task.task}
      </p>
      <p>{task.due_date}</p>
      <button className="delete-btn" onClick={() => handleDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default Task;

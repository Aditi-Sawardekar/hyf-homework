import React from "react";

function Task({ task, handleCheckTask, handleDeleteTask }) {
  return (
    <li className="task" key={task.id}>
      <input
        className="task-completed-checkbox"
        type="checkbox"
        onChange={() => handleCheckTask(task.id)}
        checked={task.completed}
      />

      <p
        onClick={() => handleCheckTask(task.id)}
        style={task.completed ? { textDecoration: "line-through" } : null}
      >
        {task.task}
      </p>
      <p>{task.due_date}</p>
      <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default Task;

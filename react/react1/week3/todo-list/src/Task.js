import React from "react";

function Task({ task, handleCheckTask, handleDeleteTask, handleUpdateTask, updateDescription }) {
  
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
        {task.description}
      </p>
      <p>{task.deadline}</p>
      <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
        Delete
      </button>
      <button className="delete-btn" onClick={() => handleUpdateTask(task.id)}>
        Edit
      </button>
    </li>
  );
}

export default Task;

import React from 'react';

function Task({ task }) {
  return (
    <li className="task" key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
      />
      <p>{task.task}</p>
      <p>{task.due_date}</p>
    </li>
  )
}

export default Task; 
import React from "react";

const AddTask = ({ tasks, handleAddTask }) => {
  return (
    <button className="add-task-btn" onClick={() => handleAddTask()}>
      Add ToDo
    </button>
  );
};

export default AddTask;

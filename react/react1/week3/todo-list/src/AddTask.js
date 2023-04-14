import React from "react";

const AddTask = ({ newTask, setNewTask, date, setDate, handleAddTask }) => {
  
  return (
    <form className="input-task" onSubmit={handleAddTask}>
      <label htmlFor="addTask">Todo Description</label>
      <input
        id="addTask"
        type="text"
        placeholder="Add Task"
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input
        type="date"
        placeholder="Select Deadline"
        required
        value={date}
        onChange ={(e) => setDate(e.target.value)}
      />
      <button className="add-task-btn" type="submit">Add Todo</button>      
    </form>
  );
};

export default AddTask;

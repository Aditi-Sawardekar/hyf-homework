import "./App.css";
import tasksJson from "./tasks.json";
import React, { useState } from "react";
import Header from "./Header";
import TimeOnWebsiteCount from "./TimeOnWebsiteCount";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState(tasksJson);
  //const [addTask, setAddTask] = useState("")

  const handleAddTask = () => {
    const id = tasks.length + 1;

    let newTask = {
      id: id,
      task: "Random Text",
      due_date: "Thu Sep 16 2017",
      completed: false,
    };
    /* Working Code - Saved for future reference.
  // This works when addTask and setTask is used
  const addedTaskItem = tasks.push(newTask)
  setAddTask(addedTaskItem);
  */

    setTasks((prev) => [...prev, newTask]);
  };

  const handleCheckTask = (id) => {
    const taskItems = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(taskItems);
  };

  const handleDeleteTask = (id) => {
    const taskItems = tasks.filter((task) => task.id !== id);
    setTasks(taskItems);
  };

  return (
    <div className="App">
      <Header title="Todo List"/>
      <TimeOnWebsiteCount />
      <AddTask tasks={tasks} handleAddTask={handleAddTask} />
      <ToDoList
        tasks={tasks}
        handleCheckTask={handleCheckTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

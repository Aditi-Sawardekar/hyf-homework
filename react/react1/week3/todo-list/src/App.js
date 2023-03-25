import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import TimeOnWebsiteCount from "./TimeOnWebsiteCount";
import AddTask from "./AddTask";
import ToDoList from "./ToDoList";

function App() {
  const API_URL = `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`;

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const taskItems = await response.json();
        console.log(taskItems);
        setTasks(taskItems);
      } catch (error) {
        console.log(error);
      }
    };
    (async () => await fetchItems())();
  }, [API_URL]);

  const addTask = (description, deadline) => {
    const id = tasks.length ? tasks.length + 1 : 1;
    const myNewTask = { id, description, completed: false, deadline };
    const taskItems = [...tasks, myNewTask];
    setTasks(taskItems);
  };

  // When new task is submitted
  const handleAddTask = (event) => {
    event.preventDefault();
    console.log(newTask);
    console.log(date);
    if (!newTask) return;

    const today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = today.getFullYear();

    const todaysDate = `${year}-${month}-${day}`;

    if (date < todaysDate) {
      alert("Selected Date before current Date");
      return;
    }

    //Create a new function to addTask and Deadline
    addTask(newTask, date);

    // To make the input blank once we submit
    setNewTask("");
    setDate("");
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
      <Header title="Todo List" />
      <TimeOnWebsiteCount />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        date={date}
        setDate={setDate}
        handleAddTask={handleAddTask}
      />
      <ToDoList
        tasks={tasks}
        handleCheckTask={handleCheckTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

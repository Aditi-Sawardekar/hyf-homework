import Task from "./Task";

const ToDoList = ({ tasks, handleCheckTask, handleDeleteTask }) => {
  const taskList = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleCheckTask={handleCheckTask}
      handleDeleteTask={handleDeleteTask}
    />
  ));
  return (
    <ul>
      {tasks.length ? taskList : <h2>No task pending</h2>}
    </ul>
  );
};

export default ToDoList;


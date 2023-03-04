import Task from "./Task";

const ToDoList = ({ tasks, handleCheck, handleDelete }) => {
  const taskList = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
    />
  ));
  return (
    <ul>
      {tasks.length ? taskList : <h2>No task pending</h2>}
    </ul>
  );
};

export default ToDoList;


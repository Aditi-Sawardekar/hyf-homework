import Task from "./Task";

const ToDoList = ({ tasks, handleCheckTask, handleDeleteTask, handleUpdateTask, updateDescription }) => {
  
  const taskList = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleCheckTask={handleCheckTask}
      handleDeleteTask={handleDeleteTask}
      handleUpdateTask={handleUpdateTask}
      updateDescription={updateDescription}
    />
  ));

  return <ul>{tasks.length ? taskList : <h2>No task pending</h2>}</ul>;
};

export default ToDoList;

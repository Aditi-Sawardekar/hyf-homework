import tasks from "./tasks.json"
import Task from "./Task"

const ToDoList = () => {
    const taskList = tasks.map(task => <Task key={task.id} task={task} />)
    return <ul>{taskList}</ul>
}

export default ToDoList;

// Inside map, include Task component 
// Pass task as a parameter to the Task component.
// Each child in a list should have a unique "key" prop. 
// Pass key property to Task component
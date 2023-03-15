import "../styles/statusLine.scss";
import Task from "./Task";

export default function StatusLine(props) {
    const { status, tasks, addTask, deleteTask, addEmptyTask, moveTask } = props;

    let taskList, taskForStatus;

    function handleAddEmpty() {
        addEmptyTask(status);
    }

    if (tasks) {
        taskForStatus = tasks.filter((task) => {
            return task.status === status
        })
    }

    if (taskForStatus) {
        taskList = taskForStatus.map((task) => {
            return <Task
                addTask={task => addTask(task)}
                deleteTask={id => deleteTask(id)}
                moveTask={(id, status) => moveTask(id, status)}
                key={task.id}
                task={task} />
        })
    }

    return <div className='statusLine'>
        <h1>{status}</h1>
        {taskList}
        <button onClick={handleAddEmpty} className='addTask'> Add Task </button>
    </div>
}
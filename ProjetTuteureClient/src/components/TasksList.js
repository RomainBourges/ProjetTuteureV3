import Task from "./Task"
import AddTask from "./AddTask"

function TasksList (props){

    return (
        <div id="content">
            <h1>nom</h1>
            <ul id="tasks-list">
            <li>
                <Task />
            </li>
            <li>
                <AddTask />
            </li>
            </ul>
        </div>
    )
}

export default TasksList
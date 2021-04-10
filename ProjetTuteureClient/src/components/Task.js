import { ReactComponent as DeleteIcon } from '../assets/delete.svg'

function Task(props){
    const classChecked = "circle "
    const classBarred = "name"

    if(props.tasksInfos.CheckTask === "1"){
        classChecked = "circle checked"
        classBarred = "name done"
    }

    return (
        <div className="task">
            <div className="icon">
                <div className={classChecked}></div>
            </div>
            <div className={classBarred}>
                {props.tasksInfos.Title}
            </div>
            <ul>
                <li className="number">a faire</li>
                <li className="deadline">Échéance: {props.tasksInfos.Deadline}</li>
                <li className="note">Note</li>
            </ul>
            <a href="/" title="Supprimer la tâche">
                <DeleteIcon />
            </a>
        </div>
    )
}

export default Task
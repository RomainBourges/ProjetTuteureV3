import { ReactComponent as DeleteIcon } from '../assets/delete.svg'

function Task(props){
    return (
        <div className="task">
            <div className="icon">
                <div className="circle checked"></div>
            </div>
            <div className="name done">
                nom
            </div>
            <ul>
                <li className="number">2 sur 3</li>
                <li className="deadline">Échéance: demain</li>
                <li className="note">Note</li>
            </ul>
            <a href="/" title="Supprimer la tâche">
                <DeleteIcon />
            </a>
        </div>
    )
}

export default Task
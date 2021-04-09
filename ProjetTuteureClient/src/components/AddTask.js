import { ReactComponent as PlusIcon } from '../assets/plus.svg'

function AddTask(props){
    return (
        <div id="add-task">
            <div className="icon">
                <a href="/" title="Ajouter une tache">
                    <PlusIcon />
                </a>
            </div>
            <input type="text" placeholder="Ajouter une tâche..." />
        </div>
    )
}

export default AddTask
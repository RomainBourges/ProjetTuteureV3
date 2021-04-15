import { ReactComponent as PlusIcon } from '../assets/plus.svg'

function AddTask(props){
    return (
        <div id="add-task">
            <div className="icon">
                <a href="/" title="Ajouter une tache">
                    <PlusIcon />
                </a>
            </div>
            <form action="/" >
                    <input type="text" name="Title" placeholder="Title"></input>
                    <input type="text" name="Description" placeholder="Description"/>
                    <input type="date" name="Deadline" placeholder="Deadline"/>
                    <button type="submit">
                        Ajouter
                    </button>
                </form>
        </div>
    )
}

export default AddTask
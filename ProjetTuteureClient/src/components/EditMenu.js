
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import Step from "./Step"

function EditMenu(props){
    console.log("edit-menu : ",props.taskInfos.Title)

    return (
        <div id="menu-task-edit">
            <div className="block">
                <label>Titre</label>
                <input type="text" placeholder={props.taskInfos.Title} />
            </div>
            <div className="block">
                <label>Étapes</label>
                <ul>
                    <Step />
                    <Step />
                    <li className="step-container">
                        <input type="text" className="step" placeholder="Nouvelle étape" />
                        <div className="step-actions">
                            <PlusIcon />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="block">
                <label>Échéance</label>
                <input type="text" placeholder={props.taskInfos.DeadLine} />
            </div>
            <div className="block">
                <label>Notes</label>
                <textarea placeholder={props.taskInfos.Description}></textarea>
            </div>
            <div className="double-buttons">
                <button>Enregistrer</button>
                <button className="optional">Annuler</button>
            </div>
        </div>
    )
}

export default EditMenu
import { ReactComponent as RemoveIcon } from '../assets/remove.svg'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'

function EditMenu(props){
    return (
        <div id="menu-task-edit">
            <div className="block">
                <label>Titre</label>
                <input type="text" placeholder="Titre de la tâche" />
            </div>
            <div className="block">
                <label>Étapes</label>
                <ul>
                    <li className="step-container">
                        <div className="step">
                            <div className="icon">
                                <div className="circle checked"></div>
                            </div>
                            <div className="name">
                                Nom de l'étape
                            </div>
                        </div>
                        <div className="step-actions">
                            <RemoveIcon />
                        </div>
                    </li>
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
                <input type="text" placeholder="jj/mm/aaaa" />
            </div>
            <div className="block">
                <label>Notes</label>
                <textarea placeholder="Notes de la tâche"></textarea>
            </div>
            <div className="double-buttons">
                <button>Enregistrer</button>
                <button className="optional">Annuler</button>
            </div>
        </div>
    )
}

export default EditMenu
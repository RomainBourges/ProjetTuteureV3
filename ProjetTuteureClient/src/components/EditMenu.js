
import { useEffect, useState } from 'react'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import store from '../store'
import { json2array } from '../utils'
import Step from "./Step"

function EditMenu(props){
    const task = store.getState().task
if(task !== ""){
        return(
            <div id="menu-task-edit">
                <div className="block">
                    <label>Titre</label>
                    <input type="text" placeholder={task.Title} />
                </div>
                <div className="block">
                    <label>Échéance</label>
                    <input type="text" placeholder={task.DeadLine} />
                </div>
                <div className="block">
                    <label>Notes</label>
                    <textarea placeholder={task.Description}></textarea>
                </div>
                <div className="double-buttons">
                    <button>Enregistrer</button>
                    <button className="optional">Annuler</button>
                </div>
            </div>
        )
}else{
    return (
        <p>rien</p>
    )
}
    
   
}

export default EditMenu
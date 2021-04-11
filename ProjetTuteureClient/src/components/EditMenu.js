
import { useEffect, useState } from 'react'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { json2array } from '../utils'
import Step from "./Step"

function EditMenu(props){
    const [error, setError] = useState("")

      if(props.stepInfos !== ""){
        return(
            <div id="menu-task-edit">
        <div className="block">
            <label>Titre</label>
            <input type="text" placeholder={props.taskInfos.Title} />
        </div>
        <div className="block">
            <label>Étapes</label>
            <ul>
                {
                    json2array(props.stepsInfos).map((step, index) => 
                    <Step index={index} stepInfos={step} />
                  )
                }
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
        
            
              
          
            return (
                <div id="menu-task-edit">
                    <div className="block">
                        <label>Titre</label>
                        <input type="text" placeholder={props.taskInfos.Title} />
                    </div>
                    <div className="block">
                        <label>Étapes</label>
                        <ul>
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

import { useEffect, useState } from 'react'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { json2array } from '../utils'
import Step from "./Step"

function EditMenu(props){
    const [steps, setSteps] = useState(null)
    const [error, setError] = useState("")

    useEffect( () => {
        async function request(){
          let parameters = new URLSearchParams()
          parameters.append("IdTask",props.taskInfos.IdTask);
    
          const options = {
            method: 'POST',
            body: parameters
          }
          const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_steps', options)
          const data = await reponse.json()
          if(reponse.status === 200){
            setSteps(data.steps)
          }else{
            setError(data.message)
          }
        }
        request()
        console.log("selectedTask EditMenu :", props.selectedTask)
      }, [])
      console.log("steps: ",steps)

      
    if(steps){
        
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
                        json2array(steps).map((step, index) => 
                        <li key={index}><Step stepInfos={step} /></li>
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
          
      }else{

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
    )}
}

export default EditMenu
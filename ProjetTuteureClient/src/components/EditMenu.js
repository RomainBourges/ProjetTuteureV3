
import { useEffect, useState } from 'react'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import { json2array } from '../utils'
import Step from "./Step"

function EditMenu(props){
    const [error, setError] = useState("")
    const [stepsInfos, setStepsInfos] = useState("")
    const [selectedTask, setSelectedTask] = useState(props.selectedTask)

    function displaySteps(){
        const display = "";
        for(var i =0; i < stepsInfos.length; i++){
            display += <Step index={i} stepInfos={stepsInfos[i]} />
        }
        return display;
    }

    async function request(){
        let parameters = new URLSearchParams()
        parameters.append("IdTask",props.tasksInfos[selectedTask].IdTask);
    
        const options = {
          method: 'POST',
          body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureServer/get_steps', options)
        const data = await reponse.json()
        if(reponse.status === 200){
          setStepsInfos(data.steps)
        }
        if(reponse.status === 201){
          setStepsInfos("")
          setError(data.message)
        }else{
          setError(data.message)
        }
      }

    useEffect(() => {
        setSelectedTask(props.selectedTask)
        request()
    }, [props.selectedTask])

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
                {displaySteps()}
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
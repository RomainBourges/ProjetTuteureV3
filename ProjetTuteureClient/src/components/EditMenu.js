
import { useEffect, useState } from 'react'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import Step from "./Step"
import { json2array } from '../utils'

function EditMenu(props){
    const [error, setError] = useState("")
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Deadline, setDeadline] = useState("");
    const [steps, setSteps] = useState("")

    function handleChangeTitle(e){
        setTitle(e.target.value);
    }
  
    function handleChangeDescription(e){
        setDescription(e.target.value); 
    }
  
    function handleChangeDeadline(e){
        setDeadline(e.target.value);
    }


    async function updateDataTask(e){
        e.preventDefault()
        let parameters = new URLSearchParams()
        parameters.append("IdTask", props.taskInfos.IdTask)
        parameters.append("Title", Title)
        parameters.append("Description", Description)
        parameters.append("Deadline", Deadline)
    
        const options = {
          method: 'POST',
          body: parameters
        }
        
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/update_task', options)
        console.log('reponse', reponse)
        const data = await reponse.json()
        
        console.log('data', data)
        if(reponse.ok){
            
            //setError(data.message)
        }
        else{
            //console.log('erreur', data)
        }
        
      }
      async function request(){
        console.log("idtask", props.taskInfos.IdTask)
      let parameters = new URLSearchParams()
      parameters.append("IdTask",props.taskInfos.IdTask);
      

      const options = {
        method: 'POST',
        body: parameters
      }
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_steps', options)
      const data = await reponse.json()
      if(reponse.status === 200){
          console.log("ok", data)
        setSteps(data.steps)
      }else{
        console.log("pas ok", data)
        setError(data.message)
      }
    }

    useEffect( () => {
        if(props.taskInfos){
            request()
        }
        
      }, [props.taskInfos])

if(props.taskInfos){
    if(steps){

            return(
                <div id="menu-task-edit">
            <div className="block">
                <label>Titre</label>
                <input type="text" />
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
                <input type="text"/>
            </div>
            <div className="block">
                <label>Notes</label>
                <textarea></textarea>
            </div>
            <div className="double-buttons">
                <button>Enregistrer</button>
                <button className="optional">Annuler</button>
            </div>
        </div>


            )

      }else{
        return(
            <div id="menu-task-edit">
        <div className="block">
            <label>Titre</label>
            <input type="text" />
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
            <input type="text"/>
        </div>
        <div className="block">
            <label>Notes</label>
            <textarea ></textarea>
        </div>
        <div className="double-buttons">
            <button>Enregistrer</button>
            <button className="optional">Annuler</button>
        </div>
    </div>


        )
      }
    }
    


        

    

}


export default EditMenu
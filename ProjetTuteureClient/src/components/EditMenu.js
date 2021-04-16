
import { useEffect, useState } from 'react'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import Step from "./Step"
import { json2array } from "../utils"
import AddStep from './AddStep'

function EditMenu(props){
    const [error, setError] = useState("")
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Deadline, setDeadline] = useState("");
    const [steps, setSteps] = useState("");


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

        if(reponse.ok){
            setError(data.message)
        }
        else
        window.location.reload(true) 
      }
    
      

    useEffect( () => {
        async function request(){
          let parameters = new URLSearchParams()
          parameters.append("IdTask",props.taskInfos.IdTask);

          const options = {
            method: 'POST',
            body: parameters
          }
          const reponse = await fetch('http://localhost:80/ProjetTuteureServer/get_steps', options)
          const data = await reponse.json()
          if(reponse.status === 200){
            setSteps(data.steps)
          }else{
            setError(data.message)
          }
        }
        request() 
      }, [props.taskInfos])


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
                                <Step stepInfos={step} index={index+1}/>
                            )
                            }
                                <AddStep key={0} taskInfos={props.taskInfos}></AddStep>
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
            return(
            <div id="menu-task-edit">
                <div className="block">
                    <label>Titre</label>
                    <input type="text" onChange={handleChangeTitle}/>
                </div>
                <AddStep key={0} taskInfos={props.taskInfos}></AddStep>
                <div className="block">
                    <label>Échéance</label>
                    <input type="date" name="Deadline" onChange={handleChangeDeadline} />
                </div>
                <div className="block">
                    <label>Notes</label>
                    <textarea onChange={handleChangeDescription}></textarea> 
                </div>
                <div className="double-buttons">
                    <button onClick={updateDataTask}>Enregistrer</button>
                    <button className="optional">Annuler</button>
                </div>
            </div>
        )
    }
   
}


export default EditMenu

import { useEffect, useState } from 'react'
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import Step from "./Step"

function EditMenu(props){
    const [error, setError] = useState("")
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Deadline, setDeadline] = useState("");

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
        
        const reponse = await fetch('http://localhost:80/ProjetTuteureServer/update_task', options)
        const data = await reponse.json()
        console.log('erreur', data)
        
        if(reponse.ok){
            console.log('erreur', data.message)
            setError(data.message)
        }
        else
        console.log('erreur', data)
        window.location.reload(true)
      }
    
    

        return(
            
            <div id="menu-task-edit">
                <div className="block">
                    <label>Titre</label>
                    <input type="text" onChange={handleChangeTitle}/>
                </div>
                <div className="block">
                    <label>Échéance</label>
                    <input type="text" name="Deadline" placeholder="Deadline"onChange={handleChangeDeadline} />
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

export default EditMenu
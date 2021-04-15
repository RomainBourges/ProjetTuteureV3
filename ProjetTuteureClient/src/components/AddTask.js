import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import store from "../store";

import { useAuth } from "../context/auth";
import { useState } from 'react';

function AddTask(props){
    const user = useAuth()
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState("")
    const [title, setTitle] = useState("")

    async function addTask(e){
        e.preventDefault()
        let parameters = new URLSearchParams()
        parameters.append("IdUser", user.authTokens.IdUser)
        parameters.append("IdList", store.getState().list)
        parameters.append("Title", title)
        parameters.append("Description", description)
        parameters.append("Deadline", deadline)
  
        const options = {
          method: 'POST',
          body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/add_task', options)
        const data = await reponse.json()
  
        if(reponse.ok){
          console.log("message :",data.message)
        console.log("data :",data)
        }else{
            console.log("message :",data.message)
        }
      }
      
      function handleTitleChange(e){
          setTitle(e.target.value)
      }

      function handleDescriptionChange(e){
        setDescription(e.target.value)
    }

    function handleDeadlineChange(e){
        setDeadline(e.target.value)
    }

    return (
        <div id="add-task">
            
                    <PlusIcon />
            <form action="/" >
                    <input type="text" name="Title" onChange={handleTitleChange} placeholder="Title"></input>
                    <input type="text" name="Description" onChange={handleDescriptionChange} placeholder="Description"/>
                    <input type="date" name="Deadline" onChange={handleDeadlineChange} placeholder="Deadline"/>
                    <button type="submit" onClick={addTask}>
                        Ajouter
                    </button>
                </form>
        </div>
    )
}

export default AddTask
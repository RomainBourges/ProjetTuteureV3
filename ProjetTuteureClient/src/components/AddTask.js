import { useState } from 'react';
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import store from '../store'

function AddTask(props){

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Deadline, setDeadline] = useState("");
    const [error, setError] = useState("");
  
    function handleChangeTitle(e){
        setTitle(e.target.value);
    }
  
    function handleChangeDescription(e){
        setDescription(e.target.value);
    }
  
    function handleChangeDeadline(e){
        setDeadline(e.target.value);
    }
    
    return (
        <div id="add-task">
            <div className="icon">
                <a href="/" title="Ajouter une tache">
                    <PlusIcon />
                </a>
            </div>
            <form action="/" >
                    <input type="text" name="Title" placeholder="Title" onChange={handleChangeTitle}></input>
                    <input type="text" name="Description" placeholder="Description" onChange={handleChangeDescription}/>
                    <input type="date" name="Deadline" placeholder="Deadline"onChange={handleChangeDeadline} />
                    <button type="submit" onClick={addTask} >
                        Ajouter
                    </button>
                </form>
        </div>
    )


async function addTask(e){
    e.preventDefault()
    let parameters = new URLSearchParams()
    parameters.append("IdList", store.getState().list)
    parameters.append("Title", Title)
    parameters.append("Description", Description)
    parameters.append("Deadline", Deadline)

    const options = {
      method: 'POST',
      body: parameters
    }
    const reponse = await fetch('http://localhost:80/ProjetTuteureServer/add_task', options)
    const data = await reponse.json()

    if(!reponse.ok){
        setError(data.message)
    }
  }
}

export default AddTask
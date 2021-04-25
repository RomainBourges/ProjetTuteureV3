import { useState } from 'react';
import { useParams } from 'react-router';
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import Login from './Login';

function AddTask(props){
    const IdList = useParams().list
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
            <form action={`/home/${IdList}`} >
                <input type="text" name="Title" placeholder="Title" onChange={handleChangeTitle}></input>
                <input type="text" name="Description" placeholder="Description" onChange={handleChangeDescription}/>
                <input type="date" name="Deadline" placeholder="Deadline"onChange={handleChangeDeadline} />
                <button type="submit" onClick={addTask} >
                    Ajouter
                </button>
                <p>{error}</p>
            </form>
        </div>
    )


async function addTask(e){
    e.preventDefault()
    if(!Title || !Description || !Deadline){
        
        setError("Veuillez remplir tous les champs")
    }else{
    console.log("date : ", Date.now())
    let parameters = new URLSearchParams()
    parameters.append("IdList", IdList)
    parameters.append("Title", Title)
    parameters.append("Description", Description)
    parameters.append("Deadline", Deadline)

    const options = {
      method: 'POST',
      body: parameters
    }
    const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/add_task', options)
    const data = await reponse.json()
    if(reponse.ok){
        window.location.href = `/home/${IdList}`
    }
    else{
        console.log("erreur : ", data.message)
        setError(data.message)
    }
}
  }
}

export default AddTask
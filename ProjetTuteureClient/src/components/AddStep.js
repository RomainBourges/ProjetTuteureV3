import { useState } from 'react';
import { ReactComponent as PlusIcon } from '../assets/plus.svg'
import store from '../store'

function AddStep(props){

    const [Title, setTitle] = useState("");
    const [error, setError] = useState("");
  
    function handleChangeTitle(e){
        setTitle(e.target.value);
    }
    
    return (
            <li className="step-container">
            <input type="text" className="step" placeholder="Nouvelle étape" onChange={handleChangeTitle} />
                <div className="step-actions">
                <PlusIcon onClick={addStep}/>
                </div>
            </li>
    )


async function addStep(e){
    e.preventDefault()
    let parameters = new URLSearchParams()
    parameters.append("IdTask", props.taskInfos.IdTask)
    parameters.append("Title", Title)

    const options = {
      method: 'POST',
      body: parameters
    }
    const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/add_step', options)
    const data = await reponse.json()

    if(!reponse.ok){
        setError(data.message)
    }
  }
}

export default AddStep
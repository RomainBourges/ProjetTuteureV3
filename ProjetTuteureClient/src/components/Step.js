import { useState } from 'react';
import { ReactComponent as RemoveIcon } from '../assets/remove.svg'


function Step(props){
    const [error, setError] = useState("");

    return (
        <li key={props.index} className="step-container">
            <div className="step">
                <div className="icon">
                    <div className="circle checked"></div>
                </div>
                <div className="name">
                    {props.stepInfos.Title}
                </div>
            </div>
            <div className="step-actions">
                <RemoveIcon onClick={deleteStep}/>
            </div>
        </li>
    )



    async function deleteStep(){
        let parameters = new URLSearchParams()
        parameters.append("IdStep", props.stepInfos.IdStep);
    
        const options = {
        method: 'POST',
        body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureServer/delete_step', options)
        const data = await reponse.json()
        if(!reponse.ok){
            setError(data.message)
        }
    }

}

export default Step
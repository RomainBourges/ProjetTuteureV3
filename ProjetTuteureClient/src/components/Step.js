import { useState } from 'react';
import { ReactComponent as RemoveIcon } from '../assets/remove.svg'
import { useParams } from "react-router";


function Step(props){
    const classChecked = props.stepInfos.CheckStep === "1" ? "circle checked" : "circle"
    const classBarred = props.stepInfos.CheckStep === "1" ? "name done" : "name"
    const idList = useParams().list
    const idTask = useParams().task
    const [error, setError] = useState("");

    async function checked(e){
        e.stopPropagation()
        let parameters = new URLSearchParams()
        parameters.append("IdStep", props.stepInfos.IdStep);
    
        const options = {
        method: 'POST',
        body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/update_check_step', options)
        const data = await reponse.json()
        if(reponse.ok){
            window.location.href = `/home/${idList}/${idTask}/show`
        }else{
            console.log("checkstep erreur : ", data.message)
        }
    }

    return (
        <li key={props.index} className="step-container">
            <div className="step">
                <div className="icon" onClick={checked}>
                    <div className={classChecked}></div>
                </div>
                <div className={classBarred}>
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
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/delete_step', options)
        const data = await reponse.json()
        if(reponse.ok){
            window.location.href = `/home/${idList}/${idTask}/show`
        }
    }

}

export default Step
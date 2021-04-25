import { useEffect, useState } from 'react'
import { ReactComponent as DeleteIcon } from '../assets/delete.svg'
import {useParams} from "react-router-dom";

function Task(props){
    const idTask = useParams().task
    const idList = useParams().list
    const showEditMenu = useParams().show
    const classChecked = props.tasksInfos.CheckTask === "1" ? "circle checked" : "circle"
    const classBarred = props.tasksInfos.CheckTask === "1" ? "name done" : "name"
    const [error, setError] = useState("");
    
    
        
    async function checked(e){
        e.stopPropagation();
        
        if(props.tasksInfos.IdTask){
            let parameters = new URLSearchParams()
            parameters.append("IdTask", props.tasksInfos.IdTask);

            const options = {
            method: 'POST',
            body: parameters
            }
            const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/update_check_task', options)
            const data = await reponse.json()
            if(reponse.ok){
                if(showEditMenu){
                    window.location.href = `/home/${idList}/${props.tasksInfos.IdTask}/show`
                }else{
                    window.location.href = `/home/${idList}/${props.tasksInfos.IdTask}`
                }
            }else{
                console.log("checked erreur : ", data.message)
            }
        }
    }


    async function deleteTask(e){
        e.stopPropagation()
        let parameters = new URLSearchParams()
        parameters.append("IdTask", props.tasksInfos.IdTask);
    
        const options = {
        method: 'POST',
        body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/delete_task', options)
        const data = await reponse.json()
        if(reponse.ok){
            window.location.href = `/home/${idList}`
        }
      }

      function handleClick() {
          if(props.tasksInfos.IdTask === idTask){
              if(showEditMenu){
                window.location.href = `/home/${idList}/${props.tasksInfos.IdTask}`
              }else{
                window.location.href = `/home/${idList}/${props.tasksInfos.IdTask}/show`
              }
          }else{
            window.location.href = `/home/${idList}/${props.tasksInfos.IdTask}`
          }
      }

    return (
        <div className="task" onClick={handleClick}>
            <div className="icon" onClick={checked}>
                <div className={classChecked}></div>
            </div>
            <div className={classBarred}>
                {props.tasksInfos.Title}
            </div>
            <ul>
                <li className="number">{props.tasksInfos.FinishedSteps} sur {props.tasksInfos.TotalSteps}</li> 
                <li className="deadline">Échéance: {props.tasksInfos.DeadLine}</li>
                <li className="note">{props.tasksInfos.Description}</li>
            </ul>
                <DeleteIcon onClick={deleteTask}/>
        </div>
    )
}

export default Task
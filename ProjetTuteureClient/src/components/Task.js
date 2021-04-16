import { useEffect, useState } from 'react'
import { ReactComponent as DeleteIcon } from '../assets/delete.svg'

function Task(props){
    const [classChecked, setClassChecked] = useState("circle ")
    const [classBarred, setClassBarred] = useState("name ")
    const [checkTask, setCheckTask] = useState(props.tasksInfos.CheckTask)

    
useEffect(() => {
    if(checkTask === "1"){
            setClassChecked("circle checked")
            setClassBarred("name done")
        }else{
            setClassChecked("circle")
            setClassBarred("name")
        }
})
        

    async function clicked(e){
        e.stopPropagation()
        let parameters = new URLSearchParams()
        parameters.append("IdTask", props.tasksInfos.IdTask);

        const options = {
        method: 'POST',
        body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/update_check_task', options)
        const data = await reponse.json()
        if(reponse.status === 200){
            setCheckTask(checkTask === "0" ? "1" : "0")
        }
    }


    async function deleteTask(){
        let parameters = new URLSearchParams()
        parameters.append("IdTask", props.tasksInfos.IdTask);
    
        const options = {
        method: 'POST',
        body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/delete_task', options)
        const data = await reponse.json()
        if(reponse.status === 200){
          console.log(data)
        }else{
            console.log('data:', data.message)
        }
      }

    return (
        <div className="task" onClick={props.onClick}>
            <div className="icon" onClick={clicked}>
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
import { useEffect, useState } from 'react'
import { ReactComponent as DeleteIcon } from '../assets/delete.svg'

import store from "../store";

function Task(props){
    const [classChecked, setClassChecked] = useState("circle ")
    const [classBarred, setClassBarred] = useState("name ")
    const [checkTask, setCheckTask] = useState(props.tasksInfos.CheckTask)
    const task = store.getState().task

useEffect(() => {
    if(task.CheckTask === "1"){
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
        parameters.append("IdTask", task.IdTask);

        const options = {
        method: 'POST',
        body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/update_check_task', options)
        const data = await reponse.json()
        console.log(data)
        if(reponse.status === 200){
            setCheckTask(checkTask === "0" ? "1" : "0")
        }
    }

    async function deleteTask(e){
        if(store.getState().task !== "")
        e.stopPropagation();
        let parameters = new URLSearchParams()
        console.log("idtask : ", task.IdTask)
        parameters.append("IdTask", task.IdTask);
    
        const options = {
        method: 'POST',
        body: parameters
        }
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/delete_task', options)
        const data = await reponse.json()
        if(reponse.status === 200){
          console.log(data)
        }else{
            console.log(data.message)
        }
      }

      
  function setSelectedTask (value) {
    return {
       type: "SET_TASK",
       value: value
     }
  }

  function handleTaskClick(value,e){
      store.dispatch(setSelectedTask(value))
    /*
    if(index === store.getState().task){
      store.dispatch(setSelectedTask(""))
    }else{
      store.dispatch(setSelectedTask(index))
    }*/
  }

    return (
        <div className="task" onClick={handleTaskClick(props.tasksInfos)}>
            <div className="icon" onClick={clicked}>
                <div className={classChecked}></div>
            </div>
            <div className={classBarred}>
                {props.tasksInfos.Title}
            </div>
            <ul>
                <li className="number">{task.FinishedSteps} sur {props.tasksInfos.TotalSteps}</li> 
                <li className="deadline">Échéance: {props.tasksInfos.DeadLine}</li>
                <li className="note">{props.tasksInfos.Description}</li>
            </ul>
            <a href="" title="Supprimer la tâche" onClick={deleteTask}>
                <DeleteIcon />
            </a>
        </div>
    )
}

export default Task
import { useEffect, useState } from 'react'
import { ReactComponent as DeleteIcon } from '../assets/delete.svg'
import { setSelectedTask } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

function Task(props){
    const dispatch = useDispatch()
    const idTask = useSelector(state => state.selectedTask)
    //const idTask = store.getState().selectedTask;
    const [classChecked, setClassChecked] = useState("circle ")
    const [classBarred, setClassBarred] = useState("name ")
    const [checkTask, setCheckTask] = useState(props.tasksInfos.CheckTask)
    const [error, setError] = useState("");
    
    console.log("chargement Task : ", idTask)
    
        
    async function clicked(e){
        e.stopPropagation();
        
        if(idTask){
            let parameters = new URLSearchParams()
            parameters.append("IdTask", idTask);

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
        if(!reponse.ok){
            setError(data.message) 
        }
      }

      function dispatchSelectedTask(e) {
        e.preventDefault()
        const task = props.tasksInfos.IdTask;
        dispatch(setSelectedTask(task));
      }
      console.log("task ", props.tasksInfos.IdTask, " checked : ", props.tasksInfos.CheckTask)
    if(checkTask === "1"){
        return (
            <div className="task" onClick={dispatchSelectedTask}>
                <div className="icon" onClick={clicked}>
                    <div className="circle checked"></div>
                </div>
                <div className="name done">
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
    }else{
        return (
            <div className="task" onClick={dispatchSelectedTask}>
                <div className="icon" onClick={clicked}>
                    <div className="circle"></div>
                </div>
                <div className="name">
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
}

export default Task
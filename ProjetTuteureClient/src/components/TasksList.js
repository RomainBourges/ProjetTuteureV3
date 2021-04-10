import Task from "./Task"
import AddTask from "./AddTask"
import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { json2array } from "../utils";

function TasksList (props){
const idList = useParams().list
const [tasksInfos, setTasksInfos] = useState("");
const [error, setError] = useState("");

useEffect( () => {
async function request(){
  console.log("coucou 1:")
    let parameters = new URLSearchParams()
    parameters.append("IdList",idList)
    console.log("coucou 2:")

    const options = {
      method: 'POST',
      body: parameters
    }
    console.log("coucou 3:")
    const reponse = await fetch('http://localhost:80/ProjetTuteureServer/get_tasks', options)
    console.log("coucou 4:")
    const data = await reponse.json()
    console.log("data", data)
    if(reponse.status === 200){
      setTasksInfos(data.tasks)

    }else{
      setError(data.message)
    }
  }
  request()
}, [tasksInfos])
  
    return (
        <div id="content">
            <h1>nom</h1>
            <ul id="tasks-list">
            {console.log("tasksInfos : ", tasksInfos)}
            {console.log("erreur : ", error)}
            {console.log("tasksInfos.IdTask : ", tasksInfos.IdTask)}
            {json2array(tasksInfos).map(taskInfo => 
                <li key={taskInfo.IdTask}><Task tasksInfos={taskInfo}/></li>,
            )
            }
            <li>
                <AddTask />
            </li>
            </ul>
        </div>
    )
}

export default TasksList
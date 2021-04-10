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

    if(idList){
      setError("")
      let parameters = new URLSearchParams()
      parameters.append("IdList",idList);

      const options = {
        method: 'POST',
        body: parameters
      }
      
      const reponse = await fetch('http://localhost:80/ProjetTuteureServer/get_tasks', options)
      
      const data = await reponse.json()
      {console.log("data : ", data)}
      if(reponse.status === 200){
        setTasksInfos(data.tasks)

      }
      else{
        setError(data.message)
      }
    }
  }
  request()
}, [])

  
  
  if(error !== ""){
    return (
      <div id="content">
          <h1>Taches</h1>
          <ul id="tasks-list">
          <p>{error}</p>
          <li>
              <AddTask />
          </li>
          </ul>
      </div>
  )
  }else{
    return (
        <div id="content">
            <h1>Taches</h1>
            <ul id="tasks-list">
<<<<<<< HEAD
            {console.log("tasksInfos : ", tasksInfos)}
            {console.log("erreur : ", error)}
            {console.log("tasksInfos.IdTask : ", tasksInfos.IdTask)}
            {json2array(tasksInfos).map(taskInfo => 
                <li key={taskInfo.IdTask}><Task tasksInfos={taskInfo}/></li>,
            )
=======
            {console.log("tasks : ", tasksInfos)}
            {
              json2array(tasksInfos).map((taskInfo, index) => 
                <li key={index}><Task tasksInfos={taskInfo}/></li>
              )
>>>>>>> a193cdfb93a5ced7174ab2624a61438b2594c56e
            }
            <li>
                <AddTask />
            </li>
            </ul>
        </div>
    )}
}

export default TasksList
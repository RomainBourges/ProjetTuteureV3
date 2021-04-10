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
      
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_tasks', options)
      
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
            {console.log("tasks : ", tasksInfos)}
            {
              json2array(tasksInfos).map((taskInfo, index) => 
                <li key={index}><Task tasksInfos={taskInfo}/></li>
              )
            }
            <li>
                <AddTask />
            </li>
            </ul>
        </div>
    )}
}

export default TasksList
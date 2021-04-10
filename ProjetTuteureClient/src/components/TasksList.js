import Task from "./Task"
import AddTask from "./AddTask"
import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { json2array } from "../utils";
import EditMenu from "./EditMenu";

function TasksList (props){
const idList = useParams().list
const [tasksInfos, setTasksInfos] = useState("");
const [error, setError] = useState("");
const [selectedTask, setSelectedTask] = useState(null);

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

  function handleTaskClick(index){
    if(index === selectedTask){
      setSelectedTask(null);
    }else{
      setSelectedTask(index);
    }
  }
  
  if(error !== ""){
    return (
      <div id="content">
        <div className="wrapper-tasks-list content-full">
            <h1>Taches</h1>
            <ul id="tasks-list">
            <p>{error}</p>
            <li>
                <AddTask />
            </li>
            </ul></div>
      </div>
  )
  }else if(selectedTask === null){
    return (
    <div id="content">
          <div className="wrapper-tasks-list content-full">
            <h1>Taches</h1>
            <ul id="tasks-list">
            {console.log("selectedTask : ", selectedTask)}
            {console.log("tasksInfos : ", tasksInfos[0])}
            {
              json2array(tasksInfos).map((taskInfo, index) => 
                <li key={index}><Task tasksInfos={taskInfo} onClick={() => {handleTaskClick(index)}}/></li>
              )
            }
            <li>
                <AddTask />
            </li>
            </ul>
          </div>
        </div>
    )
  }else{
    return (
        <div id="content">
          <div className="wrapper-tasks-list">
            <h1>Taches</h1>
            <ul id="tasks-list">
            {console.log("selectedTask : ", selectedTask)}
            {console.log("tasksInfos : ", tasksInfos[0])}
            {
              json2array(tasksInfos).map((taskInfo, index) => 
                <li key={index}><Task tasksInfos={taskInfo} onClick={() => {handleTaskClick(index)}}/></li>
              )
            }
            <li>
                <AddTask />
            </li>
            </ul>
          </div>
            <EditMenu taskInfos={tasksInfos[selectedTask]}/>
        </div>
    )}
}

export default TasksList
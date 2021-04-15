import Task from "./Task"
import AddTask from "./AddTask"
import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { json2array } from "../utils";
import EditMenu from "./EditMenu";
import store from "../store";

function TasksList (props){
  const idList = store.getState().list;
  const [tasksInfos, setTasksInfos] = useState("");
  const [error, setError] = useState("");
  const [selectedTask, setSelectedTask] = useState("");

  useEffect( () => {
    request()
  }, [idList])

  

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
      if(reponse.status === 200){
        setTasksInfos(data.tasks)
      }
      else{
        setError(data.message)
        setTasksInfos("")
      }
    }
  }

  function handleTaskClick(index,e){
    if(index === selectedTask){
      setSelectedTask("");
    }else{
      setSelectedTask(index);
    }
  }
  
  if(selectedTask === ""){
    return (
      <div id="content">
        <div className="wrapper-tasks-list content-full">
          <h1>Taches</h1>
          <ul id="tasks-list">
            <li>{error}</li>
          {
            json2array(tasksInfos).map((taskInfo, index) => 
              <li key={index}><Task tasksInfos={taskInfo} onClick={(e) => {handleTaskClick(index,e)}}/></li>
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
        <EditMenu taskInfos={tasksInfos[selectedTask]} />
      </div>
    ) 
  }
}

export default TasksList
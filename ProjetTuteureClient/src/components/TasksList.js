import Task from "./Task"
import AddTask from "./AddTask"
import { useEffect, useState } from "react";
import { json2array } from "../utils";
import EditMenu from "./EditMenu";
import { useParams } from "react-router";

function TasksList (props){
  //const idList = store.getState().selectedList;
  const idList = useParams().list
  const idTask = useParams().task
  const showEditMenu = useParams().show
  //let currentTaskInfos = ""
  const [currentTaskInfos, setCurrentTaskInfos] = useState("");
  const [tasksInfos, setTasksInfos] = useState("");
  const [error, setError] = useState("");
  if(!tasksInfos){
    getTasks()
  }
   if(!currentTaskInfos){
    json2array(tasksInfos).map((taskInfo) => 
          {if(taskInfo.IdTask === idTask){
            setCurrentTaskInfos(taskInfo)
          }}
        )
   }
  


  async function getTasks(){

    if(idList){
      let parameters = new URLSearchParams()
      parameters.append("IdList",idList);

      const options = {
        method: 'POST',
        body: parameters
      }
      
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_tasks', options)
      
      const data = await reponse.json()
      if(reponse.ok){
        setTasksInfos(data.tasks)
        setError(data.message)
      }
      else{
        setError(data.message)
        setTasksInfos("")
      }
    }
  }

  
  function displayTasks () {
    if(tasksInfos !== null){
    return(
      
        json2array(tasksInfos).map((taskInfo, index) => 
          //<li key={index}><Task tasksInfos={taskInfo} onClick={(e) => {handleTaskClick(index,e)}}/></li>
          <li key={taskInfo.IdTask}><Task tasksInfos={taskInfo} /></li>
        )
        )
    }
  }

  function displayAddTask(){
    if(idList){
      return (
        <AddTask />
      )
    }
  }
  
  if(!idList){
    return (
      <div id="content">
        <div className="wrapper-tasks-list content-full">
          <h1>Taches</h1>
          <ul id="tasks-list">
            <li>{error}</li>
          {displayTasks()}
          </ul>
        </div>
      </div>
    )
   }else if(!showEditMenu || !tasksInfos){
     return (
      <div id="content">
        <div className="wrapper-tasks-list content-full">
          <h1>Taches</h1>
          <ul id="tasks-list">
          {displayTasks()}
          <li>
              {displayAddTask()}
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
          {displayTasks()}
          <li>
              {displayAddTask()}
          </li>
          </ul>
        </div>
        <EditMenu taskInfos={currentTaskInfos} />
      </div>
    ) 
  }
}

export default TasksList
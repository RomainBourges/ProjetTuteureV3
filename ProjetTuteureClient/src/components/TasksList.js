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
  const [selectedTask, setSelectedTask] = useState("");

  useEffect( () => {
    request()
  }, [])

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
      if(reponse.status === 200){
        setTasksInfos(data.tasks)
        console.log(data.tasks)
      }
      else{
        setError(data.message)
      }
    }
  }

  function handleTaskClick(index){
    if(index === selectedTask){
      setSelectedTask("");
    }else{
      setSelectedTask(index);
      request()
    }
    
  }

  function displayTasksList(){
    if(tasksInfos !== null){
      var display = "";
        for(var i =0; i < tasksInfos.length; i++){
            display += <Task index={i} tasksInfos={tasksInfos[i]} />
        }
        return display;
    }else{
      return <p className="error">{error}</p>
    }
  }

  function displayEditMenu(){
    if(selectedTask !== ""){
      return <EditMenu selectedTask={selectedTask} taskInfos={tasksInfos[selectedTask]}/>
    }
  }

  return (
    <div id="content">
      <div className="wrapper-tasks-list">
        <h1>Taches</h1>
        <ul id="tasks-list">
        {displayTasksList()}
        <li>
            <AddTask />
        </li>
        </ul>
      </div>
        {displayEditMenu()}
    </div>
  ) 

  
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
  }else if(selectedTask === ""){
    return (
    <div id="content">
          <div className="wrapper-tasks-list content-full">
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
        </div>
    )
   
          }
}

export default TasksList
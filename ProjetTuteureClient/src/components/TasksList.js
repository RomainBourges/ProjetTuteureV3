import Task from "./Task"
import AddTask from "./AddTask"
import { useEffect, useState } from "react";
import { json2array } from "../utils";
import EditMenu from "./EditMenu";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../actions";

function TasksList (props){
  const dispatch = useDispatch();
  const idList = useSelector(state => state.selectedList)
  //const idList = store.getState().selectedList;
  const tasksInfos = useSelector(state => state.tasks);
  //const [tasksInfos, setTasksInfos] = useState("");
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
      
      const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/get_tasks', options)
      
      const data = await reponse.json()
      if(reponse.status === 200){
        dispatch(setTasks(data.tasks))
        //setTasksInfos(data.tasks)
        setError(data.message)
      }
      else{
        setError(data.message)
        //setTasksInfos("")
      }
    }
  }

  /*function handleTaskClick(index,e){
    if(index === selectedTask){
      setSelectedTask("");
    }else{
      setSelectedTask(index);
    }
  }*/

  function displayTasks () {
    console.log("displayTasks ", tasksInfos)
    if(tasksInfos !== null){
    return(
      
        json2array(tasksInfos).map((taskInfo, index) => 
          //<li key={index}><Task tasksInfos={taskInfo} onClick={(e) => {handleTaskClick(index,e)}}/></li>
          <li key={taskInfo.IdTask}><Task tasksInfos={taskInfo} /></li>
        )
        )
    }
  }
  
  if(selectedTask === "" || tasksInfos === ""){
    return (
      <div id="content">
        <div className="wrapper-tasks-list content-full">
          <h1>Taches</h1>
          <ul id="tasks-list">
            <li>{error}</li>
          {displayTasks()}
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
          {displayTasks()}
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
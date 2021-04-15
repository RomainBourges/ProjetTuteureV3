import * as React from "react"
import Menu from "./Menu"
import TasksList from "./TasksList"

function Home(props){
  return (
    <div className="wrapper">
      <Menu />
      <TasksList />
    </div> 
    
  )
}


export default Home;
import * as React from "react"
import Menu from "./Menu"
import TasksList from "./TasksList"
import EditMenu from "./EditMenu"
//export class Home extends React.Component {
function Home(props){
  return (
    <div className="wrapper">
      <Menu />
      <TasksList />
    </div> 
    
  )
}


export default Home;
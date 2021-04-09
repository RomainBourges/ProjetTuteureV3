import * as React from "react"
import MenuBottom from "./MenuBottom"
import MenuTitle from "./MenuTitle"
import MenuLists from "./MenuLists"
import { useParams } from "react-router";

function Menu(props){
  
  const list = useParams()

  return (
    <div id="menu">
        <MenuTitle />
        <MenuLists />
        <MenuBottom />
        {console.log(list)}
    </div>
  )
}


export default Menu;
import * as React from "react"
import MenuBottom from "./MenuBottom"
import MenuLists from "./MenuLists"
import { useAuth } from "../context/auth";
import { useParams } from "react-router";

function Menu(props){
  const user=useAuth()
  return (
    <div id="menu">
        <button id="close-menu-button"></button>
        <a href="/home" id="user-email">{user.authTokens.Email}</a>
        <MenuLists/>
        <MenuBottom/>
        {console.log(useParams())}
    </div>
  )
}


export default Menu;
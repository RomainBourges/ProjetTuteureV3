import * as React from "react"
import MenuBottom from "./MenuBottom"
import MenuLists from "./MenuLists"
<<<<<<< HEAD
//export class Menu extends React.Component {
function Menu(props){
  return (
    <div id="menu">
        <button id="close-menu-button"></button>
        <a href="/home" id="user-email">Accueil</a>
        <MenuLists/>
        <MenuBottom/>
=======
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
>>>>>>> 92023ad5697cf7bf39cb93c9798b8ce9077bebd9
    </div>
  )
}


export default Menu;
import * as React from "react"
import { MenuBottom } from "./MenuBottom"
import { MenuLists } from "./MenuLists"
export class Menu extends React.Component {

  render(){
    return (<div id="menu">
                <button id="close-menu-button"></button>
                <a href="/home" id="user-email">Accueil</a>
                <MenuLists/>
                <MenuBottom/>
            </div>
            )
  }
}

export default Menu;
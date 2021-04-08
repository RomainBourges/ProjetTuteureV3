import * as React from "react"
import { MenuBottom } from "./menuBottom"
import { MenuLists } from "./menuLists"
export class Menu extends React.Component {

  render(){
    return (<div id="menu">
                <button id="close-menu-button"></button>
                <a href="/login" data-navigo id="user-email">Accueil</a>
                <MenuLists/>
                <MenuBottom/>
            </div>
            )
  }
}
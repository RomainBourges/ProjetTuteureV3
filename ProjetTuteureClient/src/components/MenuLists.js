import * as React from "react"
export class MenuLists extends React.Component {

  render(){
    return ( <nav id="menu-lists">
                <span class="title">Mes listes</span>
                <ul>
                    <li><a href="/list/{id}" title="{nom}"><div class="badge">25</div></a></li>
                    <li><a href="/list/{id}" title="{nom}">{nom}<div class="badge">3</div></a></li>
                </ul>
            </nav>
            )
  }
}
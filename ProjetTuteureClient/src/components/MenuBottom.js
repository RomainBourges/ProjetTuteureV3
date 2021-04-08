import * as React from "react"
export class MenuBottom extends React.Component {

  render(){
    return (<nav id="menu-bottom">
                <ul>
                    <li>
                    <a href="settings.html" id="menu-settings" title="Paramètres">Paramètres</a>
                    </li>
                    <li>
                    <a href="/" id="menu-logout" title="Déconnexion">Déconnexion</a>
                    </li>
                </ul>
            </nav>
            )
  }
}
export default MenuBottom;
import * as React from "react"
import { useAuth } from "../context/auth";
import {NavLink} from 'react-router-dom'

//export class MenuBottom extends React.Component {
function MenuBottom(props){
  const { setAuthTokens } = useAuth();

  function logOut(){
    setAuthTokens("");
    //localStorage.clear();
  }

  return (
    <div id="menu-bottom">
      <ul>
        <li>
          <a href="settings.html" id="menu-settings" title="Paramètres">Paramètres</a>
        </li>
        <li>
          <NavLink to="/login" id="menu-logout" onClick={logOut} title="Déconnexion">Déconnexion</NavLink>
        </li>
      </ul>
    </div>
    )
}

export default MenuBottom;
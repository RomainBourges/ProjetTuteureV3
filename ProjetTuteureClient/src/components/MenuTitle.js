
import { useAuth } from "../context/auth";
import { ReactComponent as Home } from '../assets/home.svg'
import store from "../store";

function MenuTitle(props){
    const user=useAuth()

    return(
        <div className="menu-title">
            <button id="close-menu-button"></button>
            <Home></Home>
            <a href="/app/home" id="user-email">{user.authTokens.Email}</a>
            {console.log(store.getState().list)}
        </div>
    )
}

export default MenuTitle
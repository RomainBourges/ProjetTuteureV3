
import { useAuth } from "../context/auth";

function MenuTitle(props){
    const user=useAuth()

    return(
        <div className="menu-title">
            <button id="close-menu-button"></button>
            <a href="/home" id="user-email">{user.authTokens.Email}</a>
        </div>
    )
}

export default MenuTitle
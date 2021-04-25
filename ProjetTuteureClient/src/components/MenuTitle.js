
import { useAuth } from "../context/auth";
import { ReactComponent as HomeIcon } from '../assets/home.svg'

function MenuTitle(props){
    const user=useAuth()

    return(
        <div className="menu-title">
            <button id="close-menu-button"></button>
            <HomeIcon />
            <a href="/home" id="user-email">{user.authTokens.Email}</a>
        </div>
    )
}

export default MenuTitle
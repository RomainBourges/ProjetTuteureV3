import ChangeMail from "./ChangeMail"
import ChangePassword from "./ChangePassword"
import Menu from "./Menu.js"

function Settings(props){
    return (
        <div className="wrapper">
            <Menu />
            <div className="content">
                <h1 id="settings-title">Paramètres</h1>
                <ChangeMail />
                <ChangePassword />
            </div>
        </div>
    )
}

export default Settings
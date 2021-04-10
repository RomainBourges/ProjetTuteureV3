import { ReactComponent as RemoveIcon } from '../assets/remove.svg'

function Step(props){
    return (
        <li className="step-container">
            <div className="step">
                <div className="icon">
                    <div className="circle checked"></div>
                </div>
                <div className="name">
                    Nom de l'étape
                </div>
            </div>
            <div className="step-actions">
                <RemoveIcon />
            </div>
        </li>
    )
}

export default Step
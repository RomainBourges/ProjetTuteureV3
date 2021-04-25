import { useAuth } from "../context/auth";

function ChangeMail(props){
	const user=useAuth()
	const [email, setEmail] = useState("");
  	const [emailConf, setemailConf] = useState("");

	function handleSubmit(){
		
	}

    return (
        <form action="" method="POST" className="settings-form">
			<h2>Adresse e-mail</h2>
			<div>
				<b>Adresse e-mail actuelle:<p>{user.authTokens.Email}</p></b>
			</div>
			<label>Nouvelle adresse e-mail</label>
			<input type="mail" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="mail@provider.com" />
			<label>Confirmer l'adresse e-mail</label>
			<input type="mail" name="email_conf" onChange={(e) => {setEmailConf(e.target.value)}} placeholder="mail@provider.com" />
			<button type="submit" onClick={handleSubmit} >Modifier l'adresse e-mail</button>
		</form>
    )
}

export default ChangeMail
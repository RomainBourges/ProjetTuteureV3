import { useAuth } from "../context/auth";

function ChangeMail(props){
	const user=useAuth()

    return (
        <form action="" method="POST" class="settings-form">
			<h2>Adresse e-mail</h2>
			<div>
				<b>Adresse e-mail actuelle:<p>{user.authTokens.Email}</p></b>
			</div>
			<label>Nouvelle adresse e-mail</label>
			<input type="mail" name="email" placeholder="mail@provider.com" />
			<label>Confirmer l'adresse e-mail</label>
			<input type="mail" name="email_conf" placeholder="mail@provider.com" />
			<button type="submit">Modifier l'adresse e-mail</button>
		</form>
    )
}

export default ChangeMail
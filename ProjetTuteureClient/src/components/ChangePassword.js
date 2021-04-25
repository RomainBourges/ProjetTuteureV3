function ChangePasword(props){
	

    return (
        <form action="" method="POST" className="settings-form">
			<h2>Mot de passe</h2>
			<label>Mot de passe actuel</label>
			<input type="password" name="password" placeholder="password" />
			<label>Nouveau mot de passe</label>
			<input type="password" name="new_password" placeholder="password" />
			<label>Confirmer le nouveau mot de passe</label>
			<input type="password" name="new_password_conf" placeholder="password" />
			<button type="submit">Modifier le mot de passe</button>
		</form>
    )
}

export default ChangePasword
function SignUp(props){
    return (
        <div id="landing">
	        <div id="frame-container">
                <form action="" method="POST" class="text-start" id="frame">
                    <label for="email">Adresse e-mail</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="mail@provider.com" required autofocus />
                    <div class="error">
                        Cette adresse e-mail est déjà utilisée
                    </div>
                    <div class="error">
                        Veuillez renseigner une adresse e-mail
                    </div>
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="password" required />
                    <div class="error">
                        Veuillez renseigner un mot de passe
                    </div>
                    <label for="password">Répéter le mot de passe</label>
                    <input type="password" id="password_conf" name="password_conf" class="form-control" placeholder="password" required />
                    <div class="error">
                        Les mots de passe ne correspondent pas
                    </div>
                    <div class="error">
                        Veuillez renseigner un mot de passe
                    </div>
                    <button type="submit">
                        Inscription
                    </button>
                    <div class="success text-center">
                        Un mail de confirmation vous a été envoyé
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
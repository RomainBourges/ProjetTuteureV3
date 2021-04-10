function SignUp(props){
    return (
        <div id="landing">
	        <div id="frame-container">
                <form action="" method="POST" class="text-start" id="frame">
                    <label for="email">Adresse e-mail</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="mail@provider.com" required autofocus />
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="password" required />
                    <label for="password">Saisissez à nouveau le mot de passe</label>
                    <input type="password" id="password_conf" name="password_conf" class="form-control" placeholder="password" required />
                    <button type="submit">
                        Inscription
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
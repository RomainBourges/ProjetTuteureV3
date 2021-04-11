import { useState } from "react"

function SignUp(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    async function handleSubmit(e)  {
        e.preventDefault()
        if(email.length === 0 || password.length === 0 || passwordConf.length === 0){
          setError("Veuillez renseigner tous les champs");
        }else if(password !== passwordConf){
            setError("Les mot de passes ne correspondent pas")
        }else{
          let parameters = new URLSearchParams();
          parameters.append("email",email);
          parameters.append("password",password)
          parameters.append("password_conf",passwordConf)
  
          const options = {
            method: 'POST',
            body: parameters
          };
          const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/add_user', options)
          const data = await reponse.json()
  
          if(reponse.ok){
            setError("")
            setMessage(data.message)
          }else{
            setError(data.message);
            setMessage("")
          }
        }
    }

    return (
        <div id="landing">
	        <div id="frame-container">
                <form action="" method="POST" class="text-start" id="frame">
                    <p className="error">{error}</p>
                    <label for="email">Adresse e-mail</label>
                    <input type="email" onChange={(e) => {setEmail(e.target.value)}} id="email" name="email" class="form-control" placeholder="mail@provider.com" required autofocus />
                    <label for="password">Mot de passe</label>
                    <input type="password" onChange={(e) => {setPassword(e.target.value)}} id="password" name="password" class="form-control" placeholder="password" required />
                    <label for="password">Saisissez à nouveau le mot de passe</label>
                    <input type="password" onChange={(e) => {setPasswordConf(e.target.value)}} id="password_conf" name="password_conf" class="form-control" placeholder="password" required />
                    <button type="submit" onClick={handleSubmit}>
                        Inscription
                    </button>
                    <p className="success text-center" >{message}</p>
                    <div className="text-center">
                        <a href="/login" title="Déjà un compte ? Connectez-vous !">Déjà un compte ? Connectez-vous !</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
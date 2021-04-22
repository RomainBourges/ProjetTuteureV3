import * as React from "react"
import { Redirect } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/auth";

function Login(props){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const { setAuthTokens } = useAuth();

  function handleChangeEmail(e){
    setEmail(e.target.value);
  }

  function handleChangePassword(e){
    setPassword(e.target.value);
  }


  async function handleSubmit(e)  {
      e.preventDefault()
      if(email.length === 0 || password.length === 0){
        setError("Veuillez renseigner tous les champs");
      }
      else{
        let parameters = new URLSearchParams();
        parameters.append("email",email);
        parameters.append("password",password)

        const options = {
          method: 'POST',
          body: parameters
        };
        const reponse = await fetch('http://localhost:80/ProjetTuteureV2/ProjetTuteureServer/verify_user', options)
        const data = await reponse.json()

        if(reponse.ok){
          setUser(data.user);
        }else{
          setError(data.message);
        }
      }
  }

  if(user !== null){
    setAuthTokens(user);
    return (
      <Redirect to="/home"/>
    )
  }
    
  return ( 
    <div id="landing">
      <div id="frame-container">
        <form action="" method="POST" className="text-start js-login-form"  id="frame">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" name="email" className="form-control" onChange={handleChangeEmail}  placeholder="mail@provider.com" autoFocus ></input>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" className="form-control" onChange={handleChangePassword}  placeholder="password" ></input>
          <p className="error text-center">{error}</p>
          <button type="submit" onClick={handleSubmit}>
            Connexion
          </button> 
          <div className="text-center">
            <a href="/signup" title="Pas encore de compte ? Inscrivez-vous !">Pas encore de compte ? Inscrivez-vous !</a>
          </div>
        </form>
      </div>
    </div>
  )
}
            
export default Login;
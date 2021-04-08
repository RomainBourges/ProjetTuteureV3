import * as React from "react"
export class Home extends React.Component {


  render(){
    return (  <div id="landing">
                <div id="frame-container">
                  <form action="" method="POST" className="text-start js-login-form"  id="frame">
                    <label for="email">Adresse e-mail</label>
                    <input type="email" id="email" name="email" className="form-control" onChange={this.handleChangeEmail}  placeholder="mail@provider.com" autoFocus ></input>
                    <label for="password">Mot de passe</label>
                    <input type="password" id="password" name="password" className="form-control" onChange={this.handleChangePassword}  placeholder="password" ></input>
                    <p className="error text-center">{this.state.error}</p>
                    <button type="submit" onClick={this.handleSubmit}>
                      Connexion
                    </button>
                    <div className="text-center">
                      <a href="oubli_mdp.html" title="J'ai oublié mon mot de passe">J'ai oublié mon mot de passe</a>
                    </div>
                    <div className="text-center">
                      <a href="login.html" title="Pas encore de compte ? Inscrivez-vous !">Pas encore de compte ? Inscrivez-vous !</a>
                    </div>
                  </form>
                </div>
              </div>
            )
  }
}
import * as React from "react"
export class Login extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      email : "",
      password :"",
      error : ""
    }
    this.handleChangeEmail=this.handleChangeEmail.bind(this)
    this.handleChangePassword=this.handleChangePassword.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  } 

  handleChangeEmail(e){
    this.setState({
      email:e.target.value
    })
    
  }

  handleChangePassword(e){
    this.setState({
      password:e.target.value
    })
    
  }


  async handleSubmit(e)  {
      e.preventDefault()
      if(this.state.email.length === 0 || this.state.password.length === 0){
        this.setState({
          error:"Veuillez renseigner tous les champs, SVP"
        })
      }
      else{

        let parameters = new URLSearchParams();
        parameters.append("email",this.state.email);
        parameters.append("password",this.state.password)

        const options = {
          method: 'POST',
          body: parameters
        };
        const reponse = await fetch('http://localhost:80/ProjetTuteureServer/verify_user', options)
        const data = await reponse.json()

        if(reponse.ok){
          return data
        }

        if(reponse.status === 400){
          this.setState({
              error : data
          })
        }
      }
    }

  render(){
    return (  <div id="landing">
                <div id="frame-container">
                  <form action="" method="POST" className="text-start js-login-form"  id="frame">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input type="email" id="email" name="email" className="form-control" onChange={this.handleChangeEmail}  placeholder="mail@provider.com" autoFocus ></input>
                    <label htmlFor="password">Mot de passe</label>
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

export default Login;
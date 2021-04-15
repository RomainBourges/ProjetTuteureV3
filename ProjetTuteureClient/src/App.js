import './App.css'
import Login from "./components/Login.js"
import SignUp from "./components/SignUp.js"
import { useState } from "react"
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { AuthContext } from "./context/auth";
import PrivateApp from './PrivateApp'


function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PublicRoute exact path="/login" component={Login}/>
        <PublicRoute exact path="/signup" component={SignUp}/>
        <PrivateRoute path="/app" component={PrivateApp} />
      </Switch>
    </Router> 
    </AuthContext.Provider>
  )
}

export default App;

import './App.css'
import Login from "./components/Login.js"
import Home from "./components/Home.js"
import { useState } from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";

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
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/home/:list" component={Home} />
      </Switch>
    </Router> 
    </AuthContext.Provider>
  )
}
export default App;

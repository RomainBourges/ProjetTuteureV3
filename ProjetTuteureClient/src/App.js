import './App.css'
import Login from "./components/Login.js"
import Home from "./components/Home.js"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/home"><Home /></Route>
      </Switch>
    </Router> 
  )
}
export default App;

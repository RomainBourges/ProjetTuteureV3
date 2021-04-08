import './App.css'
import { Login } from "./components/Login.js"
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
    
  );
}
export default App;


import Settings from "./components/Settings.js"
import Home from "./components/Home.js"
import PrivateRoute from './PrivateRoute'
import { Switch } from 'react-router-dom'
import { Component } from "react";



class PrivateApp extends Component {
  render(){
    return (
        <Switch>
          <PrivateRoute path="/" component={Home} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/home/:list" component={Home} />
          <PrivateRoute path="/home/:list/:task" component={Home} />
        </Switch>
    );
  } 

  };

  export default PrivateApp


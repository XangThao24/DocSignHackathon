import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CreateTopic from "./components/CreateTopic";
import Events from "./components/Events";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isAuth, changeAuth] = useState(false)

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/create-topic" component={CreateTopic}/>
        <Route exact path="/events" component={Events}/>
        <Route exact path="/login" component={() => <Login auth={changeAuth}/>} auth={changeAuth}/>
        <Route exact path="/signup" component={(props)=><Signup auth={changeAuth}  {...props}/> } />
        <Route exact path="/" component={Landing}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

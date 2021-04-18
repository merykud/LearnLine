import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import ForgotPass from "./components/forgot-pass.js";
import TeacherHome from "./components/teacher-home.js";


function App() {
  return (<Router>
    <div  className="App">

    <div className="backgroundImage"></div>
      
      <div className="outer">

        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/log-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/password/reset" component={ForgotPass} />
            <Route path="/teacher/home" component = {TeacherHome}/>

          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
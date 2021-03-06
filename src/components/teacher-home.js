import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class Home extends Component {
    render() {
        return (
            
             <nav className="navbar navbar-expand-lg fixed-top">
        <div  className="container">
          <Link className="navbar-brand" to={"/sign-in"}>LearnLine</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Log In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        );
    }
}
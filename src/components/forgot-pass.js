import React, { Component } from "react";
import {Link} from "react-router-dom"

export default class ForgotPass extends Component {
    render() {
        return (
            <form>

                <h3>Trouble Logging In?</h3>

                <div className="form-group">
                    <label>We'll send you a link to get back into your account.</label>
                    <input type="email" className="form-control" placeholder="Email, Phone or Username" />
                </div>

                

                <button type="submit" className="btn btn-dark btn-lg btn-block">Send</button>
                
                <p className=" forgot-password ">
                    Back To <Link to={"/log-in"}>Login</Link>
                </p>
               
            </form>
        );
    }
}
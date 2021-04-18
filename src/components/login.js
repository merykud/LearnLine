import React, { Component } from "react";
import {Link} from "react-router-dom"


class Login extends Component {

   

    render() {
       
        return (
            
            <form>

                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                
                <button type="submit" className="btn btn-dark btn-lg btn-block" > Log In as a Teacher</button>
                
                <button type="submit" className="btn btn-dark btn-lg btn-block" >Log In as a Student</button>
                

                <p className=" forgot-password ">
                    Don't have an account? <Link to={"/sign-up"}>Sign Up</Link>
                </p>
                <p className="forgot-password ">
                   
                    Forgot <Link to={"/password/reset"}>password?</Link>

    
                </p>
            </form>
        );
    }
}
export default Login;
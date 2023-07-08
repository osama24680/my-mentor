import React from "react";
import "./Login.scss"
import Logo from "../../Components/Logo/Logo"
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineGoogle} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"
import { Link } from "react-router-dom";
const Login = () => {
  return <div className="login">
    <Logo />
    <div className="login_content">
        <h1>Login</h1>
        <div className="login_content_inputField">
            <input type="email" placeholder="Email"  />
        </div>
        <div className="login_content_inputField">
            <input type="password" placeholder="Password"  />
            <button>Show</button>
        </div>
        <h3>Forget Your Password ?</h3>
        <button className="loginBtn" >Login</button>
        <div className="login_content_otherways">
            <h3>Or login with</h3>
            <div> <BiLogoFacebook /></div>
            <div><AiOutlineGoogle /></div>
            <div> <BiLogoLinkedin /></div>
        </div>
        <p className="createAccount">Not a member yet ? <Link to="/signup">click here to sign up</Link></p>
    </div>

  </div>;
};

export default Login;

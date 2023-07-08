import React from "react";
import "./Signup.scss";
import Logo from "../../Components/Logo/Logo";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
const Signup = () => {
  return (
    <div className="signup">
      <Logo />
      <div className="signup_content">
        <h2>Create a new account</h2>
        <p>Basic account information</p>
        <div className="signup_content_inputs">
          <div className="signup_content_inputs_right">
            <div className="signup_content_inputs_inputField">
              <input type="text" placeholder="Name" />
            </div>
            <div className="signup_content_inputs_inputField">
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className="signup_content_inputs_left">
            <div className="signup_content_inputs_inputField">
              <input type="password" placeholder="Password" />
              <button>Show</button>
            </div>
            <div className="signup_content_inputs_inputField">
              <input type="password" placeholder="Password" />
              <button>Show</button>
            </div>
          </div>
        </div>

        <div className="signup_content_inputs_otherways">
          <div className="signup_content_inputs_otherways_button">
            <button className="signupBTN">sign up</button>
          </div>
          <div className="signup_content_inputs_otherways_ways">
            <h3>Or login with</h3>
            <div>
              <BiLogoFacebook />
            </div>
            <div>
              <AiOutlineGoogle />
            </div>
            <div>
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="signup_checkedBox">
        <label htmlFor="checkInput">
          I accept privacy terms and and condituins
        </label>
        <input id="checkInput" type="checkbox" />
      </div>
    </div>
  );
};

export default Signup;

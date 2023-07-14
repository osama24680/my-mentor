import React, { useContext } from "react";
import "./Signup.scss";
import { mentorStore } from "../../ContextAPI/Store";
import Logo from "../../Components/Logo/Logo";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";


// import { useNavigate } from "react-router-dom"
// import { LoginSocialFacebook, LoginSocialGoogle, LoginSocialLinkedin } from "reactjs-social-login";
// import {
//   FacebookLoginButton,
//   GoogleLoginButton,
//   LinkedInLoginButton,
// } from "react-social-login-buttons";

// let navigate = useNavigate()


const Signup = () => {
  let ctx = useContext(mentorStore)


  // const OnSignSuccess = (data) => {
  //   ctx.changeData(ctx.data)
  //   navigate("/ProfileInfo")
  
  // }

  
  return (
    <div className="signup">
      <Logo />
      <div className="signup_content">
        <h2>Create a new account</h2>
        <p>Basic account information</p>
        <div className="signup_content_inputs">
          <div className="signup_content_inputs_right">
            <div className="signup_content_inputs_inputField">
              <input onChange={(e) => ctx.setSignupNameValue(e.target.value)} type="text" placeholder="Name" value={ctx.signupNameValue} />
            </div>
            <div className="signup_content_inputs_inputField">
              <input onChange={(e) => ctx.setSignupEmailValue(e.target.value)} type="email" placeholder="Email" value={ctx.signupEmailValue} />
            </div>
          </div>

          <div className="signup_content_inputs_left">
            <div className="signup_content_inputs_inputField">
              <input onChange={(e) => ctx.setSignupPasswordValue(e.target.value)} type="password" placeholder="Password" value={ctx.signupPasswordValue} />
              <button>Show</button>
            </div>
            <div className="signup_content_inputs_inputField">
              <input onChange={(e) => ctx.setSignup_R_PasswordValue(e.target.value)} type="password" placeholder="Password" value={ctx.signup_R_PasswordValue} />
              <button>Show</button>
            </div>
          </div>
        </div>

        <div className="signup_content_inputs_otherways">
          <div className="signup_content_inputs_otherways_button">
            <button onClick={(e) => ctx.HandleSignup(e)} className="signupBTN">sign up</button>
          </div>
          <div className="signup_content_inputs_otherways_ways">
            <h3>Or Signip with</h3>
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

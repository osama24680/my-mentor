import React, { useState, useContext } from "react";
import "./Navbar.scss";
import { mentorStore } from "../../../ContextAPI/Store";
import LogoImg from "../../../assets/LogoImg.png";
import old_man from "../../../assets/old_man.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  let ctx = useContext(mentorStore);

  return (
    <div className="navbar">
      <Link to="/" className="navbar_logo">
        <img src={LogoImg} alt="logo" />
      </Link>
      <div className="navbar_account">
        <div
          className={`navbar_account_circle ${!ctx.active ? "" : "moveCircle"}`}
          onClick={ctx.accountToggle}
        ></div>
        <div
          className={`navbar_account_dropdown ${
            ctx.active ? "" : "hideAccount"
          }`}
        >
          {ctx.isLoggedin ? (
            <>
              <div className="navbar_account_dropdown_data">
                <div className="navbar_account_dropdown_data_img">
                  <img src={old_man} alt="personal image" />
                </div>
                <div className="navbar_account_dropdown_data_personal">
                  <p>Osama Megahed</p>
                  <p>Software Developer</p>
                </div>
              </div>
              <div className="navbar_account_dropdown_view">
                <Link to="/UserProfile/ahmed_khaled/Mentee">View Profile</Link>
              </div>
              <div className="navbar_account_dropdown_help">
                <Link to="/GetInTouch" style={{color:"#fff"}}>Help</Link>
              </div>
              <div className="navbar_account_dropdown_logOut">
                <p>Log Out</p>
              </div>
            </>
          ) : (
            <>
              <div className="navbar_account_dropdown_login">
                <Link to="/login">Login</Link>
              </div>
              <div className="navbar_account_dropdown_signup">
                <Link to="/signup">Sign up</Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

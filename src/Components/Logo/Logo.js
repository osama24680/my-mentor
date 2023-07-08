import React from "react";
import "./Logo.scss";
import logo from "../../assets/LogoImg.png";
import favicon from "../../assets/favicon.png";
const Logo = () => {
  return (
    <>
      <div className="LogoImage_web">
        <img src={logo} alt="logo" />
      </div>
      <div className='LogoImage_mobile'>
        <img src={favicon} alt="logo" />
    </div>
    </>
  );
};

export default Logo;

import React from "react";
import "./Footer.scss";
import LogoImg from "../../../assets/LogoImg.png";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <img src={LogoImg} alt="" />
        <p>
          Shorten the gap to reach your dream job by acquiring the knowledge and
          technical experience you need.
        </p>
        <div className="All_mobileView">
          <div className="mobileView">
            <ul>
              <li>Overview</li>
              <li>Become a Mentor</li>
              <li>Become a Mentee</li>
              <li>VIP Mentors</li>
              <li>Contact Us</li>
            </ul>
            <div className="footer_icons">
              <BsFacebook />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <AiFillLinkedin />
            </div>
          </div>
          <div>
          <span>@2023 Egypt, All rights reseved</span>
          </div>
         
        </div>

        <div className="webView">
          <ul>
            <li>Overview</li>
            <li>Become a Mentor</li>
            <li>Become a Mentee</li>
            <li>VIP Mentors</li>
            <li>Contact Us</li>
          </ul>
          <div>
            <span>@2023 Egypt, All rights reseved</span>
            <div className="footer_icons">
              <BsFacebook />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="mobileFooter"></div>
    </>
  );
};

export default Footer;

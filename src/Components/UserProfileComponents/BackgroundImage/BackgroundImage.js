import React from "react";
import "./BackgroundImage.scss";
import person1 from "../../../assets/person1.jpg"
import {TbFocusCentered} from "react-icons/tb"
const BackgroundImage = () => {
  return <div className="BackgroundImage">
    <button>Message</button>
    <div className="BackgroundImage_content">
        <div className="imageAvatar">
            <img src={person1} alt="" />
            <TbFocusCentered />
        </div>
        <h3>Osama Megahed</h3>
        <h4>Software Engineer</h4>
        <p>MENTOR</p>
    </div>
  </div>;
};

export default BackgroundImage;

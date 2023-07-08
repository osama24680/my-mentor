import React, { useState, useContext } from "react";
import "./ProfileInfo.scss";
import { mentorStore } from "../../ContextAPI/Store";
import Logo from "../../Components/Logo/Logo";
import Select from "react-select";

const ProfileInfo = () => {
  const ctx = useContext(mentorStore);

  return (
    <div className="profileinfo">
      <Logo />
      <div className="profileinfo_content">
        <h2>Profile Information</h2>
        <p>Help us by answering questions to get you start</p>
        <div className="profileinfo_content_inputs">
          <div className="profileinfo_content_inputs_left">
            <div className="profileinfo_content_inputs_left_inputField">
              <label>I'm looking for</label>
              <Select
                
                defaultValue={ctx.selectedLookingOption}
                onChange={ctx.setSelectedLookingOption}
                options={ctx.lookinOptions}
              />
            </div>
            <div className="profileinfo_content_inputs_left_inputField">
              <label>My designation is</label>
              <Select
                defaultValue={ctx.selectedDesignationOption}
                onChange={ctx.setSelectedDesignationOption}
                options={ctx.designationOptions}
              />
            </div>

            <div
              className={`profileinfo_content_inputs_left_inputField ${
                ctx.isMenteeOption ? "" : "mentor_input"
              }`}
            >
              <input type="text" placeholder="Experties" />
            </div>
          </div>

          <div className="profileinfo_content_inputs_right">
            <div
              className={`profileinfo_content_inputs_right_inputField hiring_checkedBox ${
                ctx.isMenteeOption ? "mentor_input " : ""
              }`}
            >
              <label htmlFor="A_hiring">Available for hiring</label>
              <input id="A_hiring" type="checkbox" />
            </div>
            <div
              className={`profileinfo_content_inputs_right_inputField ${
                ctx.isMenteeOption ? "mentor_input" : ""
              }`}
            >
              <input type="text" placeholder="Skills" />
            </div>

            <div
              className={`profileinfo_content_inputs_right_inputField ${
                ctx.isMenteeOption ? "" : "mentor_input"
              }`}
            >
              <input type="text" placeholder="Current company" />
            </div>

            <div
              className={`profileinfo_content_inputs_right_inputField ${
                ctx.isMenteeOption ? "" : "mentor_input"
              }`}
            >
              <input type="text" placeholder="Years of experience" />
            </div>
            <div className="profileinfo_content_inputs_right_inputField">
              <input type="text" placeholder="Location" />
            </div>
          </div>

          <div className="profileinfo_content_downSection">
            <div className="profileinfo_content_downSection_resume">
              <button>Upload reusme</button>
              <p>
                Uploading your reusme is not a must, but it helps those who are
                looking for specifc qualifications
              </p>
            </div>
            <div className="profileinfo_content_downSection_submit">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

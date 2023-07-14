import React, { useContext, useState } from "react";
import "./EditUserForm.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { mentorStore } from "../../../ContextAPI/Store";
const EditUserForm = () => {
  let ctx = useContext(mentorStore);
  return (
    <div className="EditUserForm">
      <div className="firstSection">
        <div className="firstSection_left">
          <div className="firstSection_left_inputField">
            <label>Name</label>
            <input type="text" placeholder="Osama Megahed" />
          </div>
          <div className="firstSection_left_inputField">
            <label>Jop Title</label>
            <input type="text" placeholder="Software Engineer" />
          </div>
          <div className="firstSection_left_inputField">
            <label>Company</label>
            <input type="text" placeholder="Microsoft" />
          </div>
        </div>

        <div className="firstSection_right">
          <div className="firstSection_right_inputField">
            <label>Phone Number</label>
            <input type="number" placeholder="01127796848" />
          </div>
          <div className="firstSection_right_inputField">
            <label>Email</label>
            <input type="email" placeholder="osamamegahed2468@gmail.com" />
          </div>
          <div className="firstSection_right_inputField">
            <label>Jop Description</label>
            <input type="text" placeholder="Front-end developer" />
          </div>
        </div>
      </div>

      <div className="secondSection">
        <div className="mainTap" onClick={ctx.addUserExperienceInput}>
          <h3>Experiences</h3>
          <AiOutlinePlusCircle />
        </div>

        <div className="secondSection_inputs">
          {ctx.editUserArray.map((element) => (
            <>
              <div className="secondSection_inputs_experience">
                <label>Experience</label>
                <div className="inputDelete">
                  <input type="text" placeholder="Software at Microsfot " />
                  <RiDeleteBin6Line />
                </div>
              </div>
              <div className="secondSection_inputs_duration">
                <div className="secondSection_inputs_duration_from">
                  <label>From</label>
                  <input type="number" placeholder="2020" />
                </div>
                <div className="secondSection_inputs_duration_to">
                  <label>To</label>
                  <input type="number" placeholder="2022" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="thirdSection">
        <h3>Skills</h3>
        <input placeholder="write your skills " value={ctx.skillValue} onChange={(e) => { ctx.setSkillValue(e.target.value) }} onKeyUp={(e) => ctx.getSkill(e)} />
        {ctx.skillValuesArray.length === 0 ? "" : (
          <div className="skillList">
            {ctx.skillValuesArray.map(skill => (
              <p className="skillList_skill">{skill}</p>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default EditUserForm;

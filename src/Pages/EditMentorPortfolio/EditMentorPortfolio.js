import React from "react";
import "./EditMentorPortfolio.scss";
import BackgroundImage from "../../Components/UserProfileComponents/BackgroundImage/BackgroundImage";
import EditUserForm from "../../Components/UserProfileComponents/EditUserForm/EditUserForm";
import Navbar from "../../Components/HomeComponents/Navbar/Navbar";
const EditMentorPortfolio = () => {
  return (
    <>
      <Navbar />
      <div className="EditMentorPortfolio">
        <div className="EditMentorPortfolio_leftOptions"></div>
        <div className="EditMentorPortfolio_middleMain">
          <BackgroundImage />
          <div className="_2Tabs">
            <p>Personal Information</p>
            <p>Additional Information</p>
          </div>
          <EditUserForm />
            <div className="saveBTN">
              <button>Save</button>
            </div>
        </div>

        <div className="EditMentorPortfolio_rightChat"></div>
      </div>
    </>
  );
};

export default EditMentorPortfolio;

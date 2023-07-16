import React, { useContext } from "react";
import "./Invite.scss";

import { mentorStore } from "../../../ContextAPI/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import girl from "../../../assets/invite.png";
const Invite = () => {
  let ctx = useContext(mentorStore);
  return (
    <>
      <div className="invite">
        <div className="invite_image">
          <img src={girl} alt="girl" />
        </div>
        <div className="invite_data">
          <h1>Know someone who will make a good mentor</h1>
          <p>Invite them to join!</p>
          <div>
            <form onSubmit={(e) => ctx.handleInviteValue(e)} ref={ctx.form}>
              <input
                value={ctx.inviteValue}
                onChange={(e) => ctx.setInviteValue(e.target.value)}
                name="user_email"
                type="email"
                placeholder="Email address"
              />
              <div>
                <button type="submit">Invite</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Invite;

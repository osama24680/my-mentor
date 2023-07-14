import React, { useContext } from "react";
import "./OpenRequests.scss";
import { mentorStore } from '../../../ContextAPI/Store'
import { Link } from "react-router-dom";
const OpenRequests = () => {
  let ctx = useContext(mentorStore);
  return (
    <div className="OpenRequests">
      {ctx.mentoringRequests.map((mentor_req) => (
        <div className="OpenRequests_element">
          <div className="OpenRequests_element_left">
            <h1>{mentor_req.jop}</h1>
            <h2>
              <span>{mentor_req.name} </span>is looking for a mentor
            </h2>
            <p>{mentor_req.description}</p>
          </div>
          <div className="OpenRequests_element_right">
            <div className="OpenRequests_element_right_btns">
              <Link to={`/MenteeShipDetails/${mentor_req.id}`}>
                <button>View Details</button>
              </Link>
              <div>
                <button>Mentor</button>
              </div>
            </div>
            <div className="OpenRequests_element_right_data">
              <div>
                <p>Duraion: </p>
                <span> {mentor_req.duration}</span>
              </div>

              <div>
                <p>Paid: </p>
                <span> {mentor_req.paid}</span>
              </div>

              <div>
                <p>Looking for a jop: </p>
                <span> {mentor_req.lookingFor}</span>
              </div>

              <div>
                <p>Experience: </p>
                <span> {mentor_req.experience}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpenRequests;

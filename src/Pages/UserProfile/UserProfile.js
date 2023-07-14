import React, { useContext } from 'react'
import { mentorStore } from '../../ContextAPI/Store'
import { TbFocusCentered } from "react-icons/tb"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import person1 from "../../assets/person1.jpg"
import person5 from "../../assets/person5.jpg"
import "./UserProfile.scss"
import { Link, useParams } from "react-router-dom"
import Navbar from '../../Components/HomeComponents/Navbar/Navbar'
import Chat from '../../Components/UserProfileComponents/Chat/Chat'
import Calender from '../../Components/UserProfileComponents/Calender/Calender'
const UserProfile = () => {
  let ctx = useContext(mentorStore)
  let { owner, type } = useParams()
  let user = ctx?.userProfiles?.find(profile => profile.owner === owner && profile.position === type)

  console.log(user)
  return (
    <>
      <Navbar />

      <div className="allUserProfilr">
        <div className='allUserProfilr_leftData'>
          <Link to="/EditUserProfile">Edit Profile</Link>
          <Link to="">Settings</Link>
          <Link to="">Terms and Privacies</Link>
          <Link to="/NewOpportunity">Post a new Opportunity</Link>
        </div>
        <div className='UserProfile'>
          <div className="ViewProfile_BackgroundImage">
            {/* <button>Message</button> */}
            <div className="BackgroundImage_content">
              <div className="imageAvatar">
                <img src={person1} alt="" />
                <TbFocusCentered />
              </div>
              <h3>{user?.name}</h3>
              <h4>{user?.jop}</h4>
              <h4 style={{ color: "#fff" }}>{user?.position}</h4>
            </div>
          </div>
          <div className='ViewProfile_content'>
            <div className='ViewProfile_content_section_1'>
              <div className='ViewProfile_content_section_1_left'>
                <div>
                  <p>Name</p>
                  <h3>{user?.name}</h3>
                </div>
                <div>
                  <p>Jop Title</p>
                  <h3>{user?.jop}</h3>
                </div>
                <div>
                  <p>Company</p>
                  <h3>{user?.university || user?.company}</h3>
                </div>
              </div>
              <div className='ViewProfile_content_section_1_right'>
                <div>
                  <p>Phone Number</p>
                  <h3>{user?.phone}</h3>
                </div>
                <div>
                  <p>Email</p>
                  <h3>{user?.email}</h3>
                </div>
                {user?.position === "Mentor" ? "" : (
                  user?.seeker === true ? (
                    <button><p>Jop Seeker </p><AiOutlineExclamationCircle /></button>
                  ) : (
                    <button style={{ backgroundColor: "#43bc43" }}><p>Training Seeker </p><AiOutlineExclamationCircle /></button>
                  )
                )}

              </div>
            </div>
            <div className='ViewProfile_content_section_2_description'>
              <p>{user?.description}</p>
            </div>


            <h4>Experience</h4>
            {user?.experience?.map(exp => (
              <div className='ViewProfile_content_section_3_experiences' key={exp.id}>
                <div className='ViewProfile_content_section_3_experiences_left'>
                  <p>{exp.title}</p>
                </div>
                <div className='ViewProfile_content_section_3_experiences_right'>
                  <p className='start'>{exp?.duration.start} - </p>
                  <p className='start'> {exp?.duration.end}</p>
                </div>
              </div>
            ))}

            <h4>Skilss</h4>
            <div className='ViewProfile_content_section_4_skills'>
              {user?.skills.map((skill, index) => (
                <button key={index}>{skill}</button>
              ))}
            </div>



            {user?.position === "Mentor" ? (
              <div className='Open_Mentoring_Requests'>
                <h4>Open Mentoring Requests</h4>
                <div className='Open_Mentoring_Requests_data'>
                  {user.mentoringRequests.map(mentee => (
                    <div className='Open_Mentoring_Requests_data_item'>
                      <h3>{mentee.jop}</h3>
                      <div>
                        <Link to={`/MenteeShipDetails/${mentee.owner}`}>View</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (

              <div className="mentoringOpp">
                <h4>Open Mentoring Opportunities</h4>
                <div className="mentoringOpp_items">
                  {user?.mentoringOpport.map(item => (
                    <div className='mentoringOpp_items_item'>
                      <div className="mentoringOpp_items_item_part1">
                        <div className="mentoringOpp_items_item_part1_left">
                          <h4 className='item_heading'>{item.jop}</h4>
                          <p>{item.name} is looking for a mentor</p>
                        </div>
                        <div className="mentoringOpp_items_item_part1_right">
                          <Link to={`/MentorShipDetails/${item.owner}`}>View</Link>
                        </div>
                      </div>
                      <div className='mentoringOpp_items_item_part2'>

                      </div>

                    </div>
                  ))}
                </div>
              </div>

            )}


            {/* {user?.position === "Mentee" ? (
              <h4>Previously Mentored By</h4>
            ) : (
              <h4>Past Mentees</h4>
            )} */}



            {/* {user?.position === "Mentee" ? (
              <div className='ViewProfile_content_section_5_pastMentees'>
                {user?.mentees.map((ment, index) => {
                  return (
                    <div key={index}>
                      <img src={person5} alt="" />
                      <p>{ment?.name}</p>
                      <span>{ment?.jop}</span>
                    </div>
                  )

                })}
              </div>

            ) : (
              <div className='ViewProfile_content_section_5_pastMentees_mentored'> */}
            {/* {user?.mentees.map((ment, index) => {
                  return (
                    <div key={index} className='ViewProfile_content_section_5_pastMentees_mentored_main'>
                      <div className='ViewProfile_content_section_5_pastMentees_mentored_secondary'>
                        <h4>{ment.jop}</h4>
                        <p>Mentored by</p>
                        <span>{ment?.name}</span>
                      </div>
                      <Link to="">Visit</Link>
                    </div>

                  )

                })} */}
            {/* </div>
            )} */}

{/* 
            <div className='ViewProfile_content_section_5_pastMentees'>
              {user?.mentees.map((ment, index) => {
                return (
                  <div key={index}>
                    <img src={person5} alt="" />
                    <p>{ment?.name}</p>
                    <span>{ment?.jop}</span>
                  </div>
                )

              })}
            </div> */}


          </div>
        </div>
        <div className='allUserProfilr_rightData'>
          <Chat />
          <Calender />
        </div>
      </div>

    </>

  )
}

export default UserProfile
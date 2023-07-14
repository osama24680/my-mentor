import React, { useContext } from 'react'
import "./MenteehipDetails.scss"
import { Link, useParams } from "react-router-dom"
import { mentorStore } from '../../ContextAPI/Store'
import Navbar from '../../Components/HomeComponents/Navbar/Navbar'
import { AiOutlinePlusSquare } from "react-icons/ai"
import { PiCertificate } from "react-icons/pi"
import { BsCurrencyDollar } from "react-icons/bs"
import { ImLocation } from "react-icons/im"
import { BiTimeFive } from "react-icons/bi"
import { PiBagSimpleBold } from "react-icons/pi"
import person4 from "../../assets/person4.jpg"

const MentorshipDetails = () => {
  let ctx = useContext(mentorStore)
  let { id } = useParams()

  let menteeshipe = ctx.menteeships.find(el => el.id === id)
  let mentee = ctx.mentees.find(el => el.owner === menteeshipe?.owner)

  return (
    <>
      <Navbar />
      <div className='MentorshipDetails'>
        <div className='MentorshipDetails_leftList'>
          <Link to="/">Edit Mentoring Opportunity</Link>
          <Link to="/">Settings</Link>
          <Link to="/">Terms and Privacies</Link>
          <Link to="/">Post a new Opportunity <AiOutlinePlusSquare /></Link>
        </div>
        <div className='MentorshipDetails_rightContent'>
          <div className='redFlag'>Mentoring Request</div>
          <div className='MentorshipDetails_rightContent_content'>
            <h2>{menteeshipe?.jop}<br /> <span style={{fontSize:"24px"}}>{menteeshipe?.name}</span> <span style={{fontSize:"14px", color:"#000"}}> is looking for a mentor</span> </h2>
            <div className='description'>{menteeshipe?.description}</div>
            <div className='props'>
              <div>
                <p><PiBagSimpleBold /> Experience : <span>{menteeshipe?.experience}</span></p>
                <p><BsCurrencyDollar /> Paid : <span>{menteeshipe?.paid}</span></p>
              </div>
              <div>
                <p><ImLocation /> Location : <span>{menteeshipe?.location}</span></p>
                <p><BiTimeFive /> Duration : <span>{menteeshipe?.duration}</span></p>
              </div>
            
            </div>
            <h3>I'm Looking for help with</h3>
            <ul>
              {menteeshipe?.lookingFor.map((look, index) => (
                <li key={index}>{look}</li>
              ))}
            </ul>
            <h3>Requirements</h3>
            <ul>
              {menteeshipe?.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <h3>I have a background about</h3>
            <ul>
              {menteeshipe?.backgroundAbout.map((back, index) => (
                <li key={index}>{back}</li>
              ))}
            </ul>
            <h3>About {menteeshipe?.name}</h3>
            <div className="MentorshipDetails_rightContent_content_about">

              <>
                <div className='MentorshipDetails_rightContent_content_about_items'>
                  <div>
                    <p>Name</p>
                    <h3>{mentee?.name}</h3>
                  </div>
                  <div>
                    <p>Jop title</p>
                    <h3>{mentee?.jop}</h3>
                  </div>
                  <div>
                    <p>Company title</p>
                    <h3>{mentee?.company}</h3>
                  </div>
                </div>
                <div className='MentorshipDetails_rightContent_content_about_items'>
                  <div>
                    <p>Phone number</p>
                    <h3>{mentee?.phone}</h3>
                  </div>
                  <div>
                    <p>Email</p>
                    <h3>{mentee?.email}</h3>
                  </div>
                </div>
                <div className='MentorshipDetails_rightContent_content_about_items'>
                  <div>
                    <p>Expertise</p>
                    <ul>{mentee?.expertise.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                    </ul>
                  </div>
                </div>
              </>
            </div>
            <div className='MentorshipDetails_rightContent_content_iamge'>
              <p>{mentee?.description}</p>
              <div>
                <img src={person4} alt="" />
                <Link to={`/ViewProfile/${menteeshipe?.position}/${menteeshipe?.owner}`}>View profile</Link>
              </div>
            </div>
            <div className='MentorshipDetails_rightContent_content_comment'>
              <div className='MentorshipDetails_rightContent_content_comment_image'></div>
              <div className="MentorshipDetails_rightContent_content_comment_title">
                <h3>Ahmed Osama</h3>
                <p>Wonderful!!!</p>
              </div>
            </div>
            <div className='MentorshipDetails_rightContent_content_input'>
              <input type="text" placeholder='type your comment' />
            </div>
            <div className='MentorshipDetails_rightContent_content_send'>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MentorshipDetails
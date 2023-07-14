import React, { useContext } from 'react'
import "./MentorshipDetails.scss"
import { Link, useParams } from "react-router-dom"
import { mentorStore } from '../../ContextAPI/Store'
import Navbar from '../../Components/HomeComponents/Navbar/Navbar'
import { AiOutlinePlusSquare } from "react-icons/ai"
import { PiCertificate } from "react-icons/pi"
import { BsCurrencyDollar } from "react-icons/bs"
import { ImLocation } from "react-icons/im"
import { BiTimeFive } from "react-icons/bi"
import { PiBagSimpleBold } from "react-icons/pi"
import person1 from "../../assets/person1.jpg"

const MentorshipDetails = () => {
  let ctx = useContext(mentorStore)
  let { id } = useParams()

  let mentorship = ctx.mentorships.find(el => el.id === id)
  let mentor = ctx.mentors.find(el => el.owner === mentorship?.owner)
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
          <div className='redFlag'>Mentoring Opportunity</div>
          <div className='MentorshipDetails_rightContent_content'>
            <h2>Website UI Design implementation <br /> Get Mentored by : <span>{mentorship?.name}</span> </h2>
            <div className='description'>{mentorship?.description}</div>
            <div className='props'>
              <div>
                <p><PiCertificate /> Certificate : <span>{mentorship?.certificate}</span></p>
                <p><BsCurrencyDollar /> Paid : <span>{mentorship?.paid}</span></p>
              </div>
              <div>
                <p><ImLocation /> Location : <span>{mentorship?.location}</span></p>
                <p><BiTimeFive /> Duration : <span>{mentorship?.duration}</span></p>
              </div>
              <div>
                <p><PiBagSimpleBold /> Might get hired : <span>{mentorship?.hired}</span></p>
              </div>
            </div>
            <h3>Responsibilities</h3>
            <ul>
              {mentorship?.responsibilities.map((res, index) => (
                <li key={index}>{res}</li>
              ))}
            </ul>
            <h3>Requirements</h3>
            <ul>
              {mentorship?.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <h3>Expected outcome</h3>
            <ul>
              {mentorship?.expected.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
            <h3>About {mentorship?.name}</h3>
            <div className="MentorshipDetails_rightContent_content_about">

              <>
                <div className='MentorshipDetails_rightContent_content_about_items'>
                  <div>
                    <p>Name</p>
                    <h3>{mentorship?.name}</h3>
                  </div>
                  <div>
                    <p>Jop title</p>
                    <h3>{mentor?.jop}</h3>
                  </div>
                  <div>
                    <p>Company title</p>
                    <h3>{mentor?.company}</h3>
                  </div>
                </div>
                <div className='MentorshipDetails_rightContent_content_about_items'>
                  <div>
                    <p>Phone number</p>
                    <h3>{mentor?.phone}</h3>
                  </div>
                  <div>
                    <p>Email</p>
                    <h3>{mentor?.email}</h3>
                  </div>
                </div>
                <div className='MentorshipDetails_rightContent_content_about_items'>
                  <div>
                    <p>Expertise</p>
                    <ul>{mentor?.expertise.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                    </ul>
                  </div>
                </div>
              </>
            </div>
            <div className='MentorshipDetails_rightContent_content_iamge'>
              <p>{mentor?.description}</p>
              <div>
                <img src={person1} alt="" />
                <Link to={`/ViewProfile/${mentorship?.position}/${mentorship?.owner}`}>View profile</Link>
              </div>
            </div>
            <div className='MentorshipDetails_rightContent_content_comment'>
              <div className='MentorshipDetails_rightContent_content_comment_image'></div>
              <div className="MentorshipDetails_rightContent_content_comment_title">
                <h3>Ahmed Osama</h3>
                <p>this is so good</p>
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
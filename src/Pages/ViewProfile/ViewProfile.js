import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mentorStore } from '../../ContextAPI/Store'
import { TbFocusCentered } from "react-icons/tb"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import person1 from "../../assets/person1.jpg"
import person5 from "../../assets/person5.jpg"
import "./ViewProfile.scss"
import { Link } from "react-router-dom"
import Navbar from '../../Components/HomeComponents/Navbar/Navbar'
const ViewProfile = () => {
    let { owner, type } = useParams()
    let ctx = useContext(mentorStore)
    let user;
    if (type === "Mentor") {
        user = ctx.mentors.find(el => el.owner === owner)
    } else if (type === "Mentee") {
        user = ctx.mentees.find(el => el.owner === owner)
        console.log(user)
        console.log("ssssssssssssssssssss")
    }
    return (
        <>
            <Navbar />
            <div className='ViewProfile'>
                <div className="ViewProfile_BackgroundImage">
                    <button>Message</button>
                    <div className="BackgroundImage_content">
                        <div className="imageAvatar">
                            <img src={person1} alt="" />
                            <TbFocusCentered />
                        </div>
                        <h3>{user?.name}</h3>
                        <h4>{user?.jop}</h4>
                        <p>{type}</p>
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
                                <h3>{user?.status}</h3>
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
                            {user?.seeker ===true? (
                                <button><p>Jop Seeker </p><AiOutlineExclamationCircle /></button>
                            ):(
                                <button style={{backgroundColor:"#43bc43"}}><p>Training Seeker </p><AiOutlineExclamationCircle /></button>
                            )}

                        </div>
                    </div>
                    <div className='ViewProfile_content_section_2_description'>
                        <p>{user?.description}</p>
                    </div>


                    <h4>Experience</h4>
                    {user?.experience.map(exp => (
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

                    {type==="Mentee"? (
                         <h4>Previously Mentored By</h4>
                    ):(
                        <h4>Past Mentees</h4>
                    )}



                    {type === "Mentor" ? (
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
                        <div className='ViewProfile_content_section_5_pastMentees_mentored'>
                            {user?.mentored.map((ment, index) => {
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

                            })}
                        </div>
                    )}


                </div>
            </div>
        </>

    )
}

export default ViewProfile
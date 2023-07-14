import React, { useContext } from 'react'
import "./RequestSearch.scss"
import person3 from "../../../assets/person3.jpg"
import { AiFillStar } from "react-icons/ai"
import { mentorStore } from '../../../ContextAPI/Store'
import { Link } from "react-router-dom"
import Select from "react-select";

const RequestSearch = () => {
    let ctx = useContext(mentorStore)
    return (
        <div className='RequestSearch'>
            <div className='MentorSearch_filteration'>
                <div className='MentorSearch_filteration_text'>
                    <h2>Filters</h2>
                    <p>clear all</p>
                </div>
                <h4>Rating</h4>
                <div className='MentorSearch_filteration_checkboxes'>
                    <div className='MentorSearch_filteration_checkbox'>
                        <label htmlFor='Paid'>Paid</label>
                        <input onChange={(e) => ctx.handleCheckBoxRequest(e)} id="Paid" type='checkbox' name="Paid" />
                    </div>
                    <div className='MentorSearch_filteration_checkbox'>
                        <label htmlFor='lookingJop'>Looking for a jop</label>
                        <input onChange={(e) => ctx.handleCheckBoxRequest(e)} id="lookingJop" type='checkbox' name="lookingJop" />
                    </div>
              
                </div>
                <div className="profileinfo_content_inputs_left_inputField">
                    <label>Location</label>
                    <Select
                        name="Alexandria"
                        defaultValue={""}
                        onChange={ctx.setArea}
                        options={ctx.areas}
                    />
                </div>
            </div>


            <div className='MentorSearch_elements'>
                {ctx.menteeships.map((mentee, index) => (

                    <div className='MentorSearch_elements_element' key={index}>
                        <div className='MentorSearch_elements_element-part1'>
                            <div className='MentorSearch_elements_element-part1-left'>
                                <h3>{mentee.jop}</h3>
                                <p> {mentee.name} <span>is looking for a mentor</span></p>
                            </div>
                            <div className='MentorSearch_elements_element-part1-right'>
                                <Link to="">Request</Link>
                                <Link to={`/MenteeShipDetails/${mentee.id}`}>View</Link>
                            </div>
                        </div>



                        <div className='MentorSearch_elements_element-part3'>
                            <div className='MentorSearch_elements_element-part3-left'>
                                <p>{mentee.description}</p>
                            </div>
                            <div className='MentorSearch_elements_element-part3-leftData'>
                                <div className='MentorSearch_elements_element-part3-right'>
                                    <div>
                                        <p><span>Duration</span>: {mentee.duration2}</p>
                                        <p><span>Looking For a Jop</span>: {mentee.lookingForJop?"Yes":"No"}</p>
                                    </div>
                                </div>
                                <div className='MentorSearch_elements_element-part3-left'>
                                    <div>
                                        <p><span>Paid</span>: {mentee.paid}</p>
                                        <p><span>Experience</span>: {mentee.experience}</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RequestSearch
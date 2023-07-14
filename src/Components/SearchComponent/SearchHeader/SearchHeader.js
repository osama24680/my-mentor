import React, { useContext } from 'react'
import "./SearchHeader.scss"
import { GoSearch } from "react-icons/go"
import { PiHandbagBold } from "react-icons/pi"
import { BsPersonCircle } from "react-icons/bs"
import { mentorStore } from '../../../ContextAPI/Store'
import { Link } from 'react-router-dom'
const SearchHeader = () => {
    let ctx = useContext(mentorStore)
    return (
        <div className='SearchHeader'>
            <div className='app_container SearchHeader_content'>
                <div className='SearchHeader_jop'>
                    <div className='SearchHeader_jop_inputField' onClick={ctx.handleActiveJop}>
                        <p>
                            <GoSearch />
                            <span className='SearchHeader_jop_inputField_title' >{ctx.searchJopValue}</span>
                        </p>
                    </div>
                    <div className={` ${ctx.activeJop ? "SearchHeader_jop_items" : "hideList"}`}>
                        <h3 onClick={(e) => ctx.handleActiveJopList(e)}>UI/UX</h3>
                        <h3 onClick={(e) => ctx.handleActiveJopList(e)}>Back-end</h3>
                        <h3 onClick={(e) => ctx.handleActiveJopList(e)}>Front-end</h3>
                        <h3 onClick={(e) => ctx.handleActiveJopList(e)}>Graphic Designer</h3>
                    </div>
                </div>


                <div className='SearchHeader_jop'>
                    <div className='SearchHeader_jop_inputField' onClick={ctx.handleActiveMentorList}>
                        <p>
                            <BsPersonCircle />
                            <span className='SearchHeader_jop_inputField_title' >{ctx.searchMentorValue}</span>
                        </p>
                    </div>
                    <div className={` ${ctx.activeMentor ? "SearchHeader_jop_items" : "hideList"}`}>
                        <Link to="MentorSearch" onClick={(e) => ctx.handleActiveMentorList(e)} >Mentor</Link>
                        <Link to="MenteeSearch" onClick={(e) => ctx.handleActiveMentorList(e)} >Mentee</Link>
                        <Link to="OpportunitySearch" onClick={(e) => ctx.handleActiveMentorList(e)} >Opportunities</Link>
                        <Link to="RequestSearch" onClick={(e) => ctx.handleActiveMentorList(e)} >Requests</Link>
                    </div>
                </div>


                <div className='SearchHeader_jop'>
                    <div className='SearchHeader_jop_inputField' onClick={ctx.handleActiveExperienceList}>
                        <p>
                            <PiHandbagBold />
                            <span className='SearchHeader_jop_inputField_title' >{ctx.searchExperienceValue}</span>
                        </p>
                    </div>
                    <div className={` ${ctx.activeExperience ? "SearchHeader_jop_items" : "hideList"}`}>
                        <h3 onClick={(e) => ctx.handleActiveExperienceList(e)}>Experience</h3>
                        <h3 onClick={(e) => ctx.handleActiveExperienceList(e)}>No-Experience</h3>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default SearchHeader
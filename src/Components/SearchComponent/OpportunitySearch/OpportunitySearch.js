import React, { useContext } from 'react'
import "./OpportunitySearch.scss"
import person3 from "../../../assets/person3.jpg"
import { AiFillStar } from "react-icons/ai"
import { mentorStore } from '../../../ContextAPI/Store'
import { Link } from "react-router-dom"
import Select from "react-select";

const OpportunitySearch = () => {
  let ctx = useContext(mentorStore)
  return (
    <div className='MentorSearch'>
      <div className='MentorSearch_filteration'>
        <div className='MentorSearch_filteration_text'>
          <h2>Filters</h2>
          <p>clear all</p>
        </div>
        <h4>Rating</h4>
        <div className='MentorSearch_filteration_checkboxes'>
          <div className='MentorSearch_filteration_checkbox'>
            <label htmlFor='Certificate'>Certificate</label>
            <input onChange={(e) => ctx.handleCheckBoxOpportunity(e)} id="Certificate" type='checkbox' name="Certificate" />
          </div>
          <div className='MentorSearch_filteration_checkbox'>
            <label htmlFor='Paid'>Paid</label>
            <input onChange={(e) => ctx.handleCheckBoxOpportunity(e)} id="Paid" type='checkbox' name="Paid" />
          </div>
          <div className='MentorSearch_filteration_checkbox'>
            <label htmlFor='Hiring'>Hiring Possibility</label>
            <input onChange={(e) => ctx.handleCheckBoxOpportunity(e)} id="Hiring" type='checkbox' name="Hiring" />
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
        {ctx.mentorships.map((mentee,index) => (
      
          <div className='MentorSearch_elements_element' key={index}>
            <div className='MentorSearch_elements_element-part1'>
              <div className='MentorSearch_elements_element-part1-left'>
                <h3>{mentee.jop}</h3>
                <p>get mentored by: <span>{mentee.name}</span></p>
              </div>
              <div className='MentorSearch_elements_element-part1-right'>
                <Link to="">Request</Link>
                <Link to={`/MentorShipDetails/${mentee.id}`}>View</Link>
              </div>
            </div>


            <div className='MentorSearch_elements_element-part2'>
              <button>Certificate</button>
              <button>Remote</button>
              <button>Paid</button>
              <button>Might get hired</button>
              <button>Open Duration</button>
            </div>

            <div className='MentorSearch_elements_element-part3'>
             <p>{mentee.description}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default OpportunitySearch
import React, { useContext } from 'react'
import "./MenteeSearch.scss"
import person3 from "../../../assets/person3.jpg"
import { AiFillStar } from "react-icons/ai"
import { mentorStore } from '../../../ContextAPI/Store'
import { Link } from "react-router-dom"
import Select from "react-select";

const MenteeSearch = () => {
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
            <label htmlFor='hired'>Might get hired</label>
            <input onChange={(e) => ctx.handleCheckBoxMentee(e)} id="hired" type='checkbox'  name="hired" />
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
        {ctx.menteeships.map(mentee => (
          <Link to={`/MenteeShipDetails/${mentee.id}`} className='MentorSearch_elements_element' key={mentee.id}>
            <div className='MentorSearch_elements_element_image'>
              <img src={person3} alt="" />
              <div className='MentorSearch_elements_element_evaluate'>
                <AiFillStar />
                <p> 4 <span> (289 reviews)</span></p>
              </div>
            </div>
            <h3>{mentee.name}</h3>
            <p>{mentee.jop}</p>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default MenteeSearch
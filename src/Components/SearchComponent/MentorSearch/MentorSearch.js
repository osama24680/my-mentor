import React, { useContext } from 'react'
import "./MentorSearch.scss"
import person2 from "../../../assets/person2.jpg"
import { AiFillStar } from "react-icons/ai"
import { mentorStore } from '../../../ContextAPI/Store'
import { Link } from "react-router-dom"
import Select from "react-select";

const MentorSearch = () => {
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
            <label htmlFor='fiveStar'>Five stars</label>
            <input onClick={(e) => ctx.handleCheckBox(e)} id="fiveStar" type='checkbox' value={5} name="5stars" />
          </div>
          <div className='MentorSearch_filteration_checkbox'>
            <label htmlFor='fourStar'>Four stars</label>
            <input onClick={(e) => ctx.handleCheckBox(e)} id="fourStar" type='checkbox' value={4} />
          </div>
          <div className='MentorSearch_filteration_checkbox'>
            <label htmlFor='threeStar'>Three stars</label>
            <input onClick={(e) => ctx.handleCheckBox(e)} id="threeStar" type='checkbox' value={3} />
          </div>
          <div className='MentorSearch_filteration_checkbox'>
            <label htmlFor='twoStar'>Two stars</label>
            <input onClick={(e) => ctx.handleCheckBox(e)} id="twoStar" type='checkbox' value={2} />
          </div>
          <div className='MentorSearch_filteration_checkbox'>
            <label htmlFor='oneStar'>One stars</label>
            <input onClick={(e) => ctx.handleCheckBox(e)} id="oneStar" type='checkbox' value={1} />
          </div>

          <div className='MentorSearch_filteration_checkbox'>
            <label htmlFor='All'>All</label>
            <input onClick={(e) => ctx.handleCheckBox(e)} id="All" type='checkbox' />
          </div>
        </div>

        <div className="profileinfo_content_inputs_left_inputField">
          <label>Location</label>
          <Select

            defaultValue={"Alexandria"}
            onChange={ctx.setArea}
            options={ctx.areas}
          />
        </div>
      </div>


      <div className='MentorSearch_elements'>
        {ctx.mentorships.map(mentor => (
          <Link to={`/MentorshipDetails/${mentor.id}`} className='MentorSearch_elements_element' key={mentor.id}>
            <div className='MentorSearch_elements_element_image'>
              <img src={person2} alt="" />
              <div className='MentorSearch_elements_element_evaluate'>
                <AiFillStar />
                <p> 4 <span> (289 reviews)</span></p>
              </div>
            </div>
            <h3>{mentor.name}</h3>
            <p>{mentor.jop}</p>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default MentorSearch
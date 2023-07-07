import React, { useContext } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mentorStore } from '../../../ContextAPI/Store'
import { AiFillStar } from "react-icons/ai"
import "./LocationMentors.scss"
const LocationMentors = () => {
    let ctx = useContext(mentorStore)

    const elements = ctx.discoverMentors.map(mentor => (
        <div key={mentor.id} className='locationMentors_elements_element'>
            <img src={mentor.img} alt="mentor" />
            <div>
                <AiFillStar />
                <span> {mentor.stars}</span>
                <p> ({mentor.reviews} reviews)</p>
            </div>
            <h3>{mentor.name}</h3>
            <h4>{mentor.jop}</h4>
        </div>
    ))

    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },
        768:{
            items:3,
        },
        1024: {
            items: 4,
        },
    };
 
  return (
    <div className='locationMentors_elements'>
         <AliceCarousel
                mouseTracking
                 infinite
                disableDotsControls
                 disableButtonsControls={false}
                 keyboardNavigation={true}
                responsive={responsive}
                items={elements}
                autoPlay
                animationDuration={1500}
                animationType={"fadeout"}
            />
    </div>
  )
}

export default LocationMentors
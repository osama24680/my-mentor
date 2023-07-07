import React, { useContext } from 'react'
import "./RecentOppo.scss"
import { mentorStore } from '../../../ContextAPI/Store'
const RecentOppo = () => {

    let ctx = useContext(mentorStore)
    return (
        <div className='RecentOppo_elements'>
            {ctx.recentOppo.map(oppo => (
                <div key={oppo.id} className='RecentOppo_elements_element'>
                    <div className='RecentOppo_elements_element_main'>
                        <div className="RecentOppo_elements_element_main_left">
                            <h3>{oppo.jop}</h3>
                            <p>Get mentored by: <span>{oppo.mentor}</span></p>
                        </div>
                        <div className='RecentOppo_elements_element_main_right'>
                            <div><button>Request</button></div>
                            <div><button>View</button></div>
                        </div>
                    </div>
                    <div className='RecentOppo_elements_element_props'>
                        {oppo.props.map((prop, index) => (
                            <div key={index}>
                                <button>{prop}</button>
                            </div>


                        ))}
                    </div>
                    <div className='RecentOppo_elements_element_description'>
                        <p>{oppo.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecentOppo
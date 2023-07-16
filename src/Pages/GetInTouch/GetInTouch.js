import React from 'react'
import "./GetInTouch.scss"
import Navbar from '../../Components/HomeComponents/Navbar/Navbar'
import Footer from "../../Components/HomeComponents/Footer/Footer"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GetInTouch = () => {
    return (
        <>
            <Navbar />
            <div className='GetInTouch'>
                <div className='GetInTouch_left'>
                    <h1>Get in Touch</h1>
                    <p>We'd love to hear from you</p>
                </div>
                <div className='GetInTouch_right'>
                    <div className='GetInTouch_right_part1'>
                        <div>
                            <label>First Name</label>
                            <input type="text" placeholder='' />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input type="text" placeholder='' />
                        </div>
                    </div>
                    <div className='GetInTouch_right_part2'>
                        <label>Email</label>
                        <input type="email" placeholder='' />
                    </div>
                    <div className='GetInTouch_right_part2'>
                        <label>Mobile Number</label>
                        <input type="number" placeholder='' />
                    </div>
                    <div className='GetInTouch_right_part2'>
                        <label>Message</label>
                        <input type="text" placeholder='' />
                    </div>
                    <div className='GetInTouch_right_part2_btn'>
                        <button>Send</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default GetInTouch
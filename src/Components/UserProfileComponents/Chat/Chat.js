import React from 'react'
import "./Chat.scss"
import  person3  from "../../../assets/person3.jpg"
import { AiOutlineSearch } from "react-icons/ai"
const Chat = () => {
    return (
        <div className='Chat'>
            <div className='Chat_inputSearch '>
                <input type="text" placeholder='search direct message' className='Chat_inputSearch_input' />
                <AiOutlineSearch />
            </div>
            <div className='chat_items'>
                <div className='chat_items_item'>
                    <div className='chat_items_item_img'>
                        <img src={person3} alt="" />
                    </div>
                    <div className='chat_items_item_content'>
                        <h3>Ayman Shokry</h3>
                        <p>Hello form there</p>
                    </div>
                </div>
                <div className='chat_items_item'>
                    <div className='chat_items_item_img'>
                        <img src={person3} alt="" />
                    </div>
                    <div className='chat_items_item_content'>
                        <h3>Ayman Shokry</h3>
                        <p>Hello form there</p>
                    </div>
                </div>
                <div className='chat_items_item'>
                    <div className='chat_items_item_img'>
                        <img src={person3} alt="" />
                    </div>
                    <div className='chat_items_item_content'>
                        <h3>Ayman Shokry</h3>
                        <p>Hello form there</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
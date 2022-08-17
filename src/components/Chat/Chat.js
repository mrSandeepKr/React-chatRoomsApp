import React from 'react'
import './chat.css'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const Chat = () => {
    return (
        <div className='chat'>
            <ChatHeader/>
            <ChatBody/>
            <ChatFooter/>
        </div>
    )
}

export default Chat
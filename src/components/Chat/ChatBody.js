import React from 'react'

const ChatBody = () => {
    return (
        <div className="chat__body">
            <ChatPill />
        </div>
    )
}

const ChatPill = ({ isLoggedInUSer }) => {
    return (
        <div className={`chat__message ${isLoggedInUSer ? 'chat__messageRight' : ''}`}>
            <p className='chat_message-content'>
                <span className='chat_message-senderName'>Sender</span>
                content
                <span className='chat_message-time'>TimeStamp</span>
            </p>
        </div>
    )
}

export default ChatBody
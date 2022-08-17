import React from 'react'

const ChatBody = () => {
    let messages = []
    for (let i = 0; i < 50; i++)messages.push(<ChatPill isLoggedInUSer={i%3 === 0}/>)

    return (
        <div className="chat__body">
            {messages}
        </div>
    )
}

const ChatPill = ({isLoggedInUSer}) => {
    return (
        <div className={ `chat__message ${isLoggedInUSer ? 'chat__messageRight' : ''}` }>
            <p className='chat_message-content'>
                <span className='chat_message-senderName'>Sender</span>
                content 
                <span className='chat_message-time'>TimeStamp</span> 
            </p>
        </div>
    )
}

export default ChatBody
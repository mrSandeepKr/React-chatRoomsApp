import React from 'react'
import ChatListElement from './ChatListElement'

const ChatList = () => {
    var chatList = []
    for(let i=0;i<10;i++) {
        chatList.push(<ChatListElement/>)

    }

    return (
        <div className='sidebar__chatlist'>
            <ChatListElement addNewChat/>
            {chatList}
        </div>
    )
}

export default ChatList
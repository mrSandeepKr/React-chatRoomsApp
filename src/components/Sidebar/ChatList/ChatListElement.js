import React from 'react'
import RandomAvatar from '../../RandomAvatar'

const ChatListElement = ({addNewChat}) => {
  
  const createChat = () => {console.log('create new chat')}
  
  return !addNewChat ? (
    <div className='sidebar__chatlist-element'>
      <RandomAvatar/>
      <div className='sidebar__chatlist-elementInfo'>
        <h2>Chat name</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebar__chatList-header'>
      <h2>Add New Chat</h2>
    </div>
  )
}

export default ChatListElement
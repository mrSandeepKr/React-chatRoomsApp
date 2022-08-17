import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'

const ChatListElement = ({addNewChat}) => {
  const [seed, setseed] = useState('');
  let imageSrc = `https://avatars.dicebear.com/api/male/${seed}.svg`

  useEffect(()=> {
    setseed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () => {console.log('create new chat')}
  
  return !addNewChat ? (
    <div className='sidebar__chatlist-element'>
      <Avatar src = {imageSrc} />
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
import React from 'react'
import RandomAvatar from '../../Common/RandomAvatar'
import database from '../../../Firebase'
import { collection, addDoc } from "firebase/firestore";
import  {Link } from 'react-router-dom';

const ChatListElement = ({ addNewChat, name, id }) => {
  const createChat = async () => {
    let roomName = prompt('enter name of the new chat to create')
    if (roomName) {
      const docRef = await addDoc(collection(database, "rooms"), {
        name: roomName
      });
      console.log("Document written with ID: ", docRef.id);
    }
  }

  return !addNewChat ? (
    <Link to={`/room/${id}`}>
      <div className='sidebar__chatlist-element'>
        <RandomAvatar />
        <div className='sidebar__chatlist-elementInfo'>
          <h2>{name}</h2>
          <p>{id}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className='sidebar__chatList-header'>
      <h2>Add New Chat</h2>
    </div>
  )
}

export default ChatListElement
import React from 'react'
import RandomAvatar from '../../RandomAvatar'
import database from '../../../Firebase'
import { collection, addDoc } from "firebase/firestore"; 

const ChatListElement = ({addNewChat, name, id}) => {
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
    <div className='sidebar__chatlist-element'>
      <RandomAvatar/>
      <div className='sidebar__chatlist-elementInfo'>
        <h2>{name}</h2>
        <p>{id}</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebar__chatList-header'>
      <h2>Add New Chat</h2>
    </div>
  )
}

export default ChatListElement
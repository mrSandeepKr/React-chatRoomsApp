import React, { useEffect, useState } from 'react'
import database from '../../Firebase'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore"
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const ChatBody = () => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([])
 
    useEffect(() => {
        const unsubcribe = onSnapshot(query(collection(database, `rooms/${roomId}/messages`), orderBy('timestamp')), (querySnapshot) => {
            const msgs = []
            querySnapshot.forEach((snap) => {
                msgs.push(snap.data())
            })
            setMessages(msgs)
        })

        return () => {
            unsubcribe()
        }
         
    }, [roomId])
    
    return (
        <div className="chat__body">
            {messages.map((message)=> <ChatPill key={message.timestamp} message={message} />)}
        </div>
    )
}

const ChatPill = ({ message }) => {
    const  [{user}] = useStateValue()

    return (
        <div className={`chat__message ${(user.displayName === message.name) ? 'chat__messageRight' : ''}`}>
            <p className='chat_message-content'>
                <span className='chat_message-senderName'>{message.name}</span>
                {message.content}
                <span className='chat_message-time'>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
            </p>
        </div>
    )
}

export default ChatBody
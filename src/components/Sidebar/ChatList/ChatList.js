import database from '../../../Firebase';
import React, { useState, useEffect } from 'react'
import ChatListElement from './ChatListElement'
import { collection, query, onSnapshot } from "firebase/firestore";


const ChatList = () => {
    const [rooms, setRooms] = useState([]);
    
    useEffect(() => {
        const unsubcribe = onSnapshot(query(collection(database, "rooms")), (querySnapshot) => {
            let roomData = []
            querySnapshot.forEach((doc) => {
                roomData.push(
                    {
                        name: doc.data().name,
                        id: doc.id
                    }
                )
            });
            setRooms(roomData)
        })

        return () => {
            unsubcribe()
        } 
    }, [])

    return (
        <div className='sidebar__chatlist'>

            <ChatListElement addNewChat />
            { rooms.map((room) => <ChatListElement key={room.id} name={room.name} id={room.id}/>) }
        </div>
    )
}

export default ChatList
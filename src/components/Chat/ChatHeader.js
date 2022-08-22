import React from 'react'
import { IconButton } from '@mui/material'
import RandomAvatar from '../Common/RandomAvatar';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import { useState, useEffect } from 'react';
import { getDoc, doc, query, getDocs, collection, orderBy, limit} from 'firebase/firestore';
import database from '../../Firebase';
import { useParams } from 'react-router-dom'

const ChatHeader = () => {
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")
    const [lastSeen, setLastSeen] = useState("")

    useEffect(() => {
        if (roomId) {
            getDoc(query(doc(database, "rooms", roomId))).then((snap) => {
                setRoomName(snap.data().name)
            })

            getDocs(query(collection(database, 'rooms', roomId , 'messages'), orderBy('timestamp','desc'), limit(1)))
            .then((querySnapShot) => {
                let time = "Don't know"
                querySnapShot.forEach((snap) => {
                    time = (new Date(snap.data().timestamp?.toDate()).toUTCString())
                })

                console.log(time)
                setLastSeen(time)
            })
        }
    }, [roomId])
 
    return (
        <div className="chat__header">
            <RandomAvatar />

            <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
                <p>{lastSeen}</p>
            </div>

            <div className='chat__headerBtns'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader
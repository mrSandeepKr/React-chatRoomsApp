import React from 'react'
import { IconButton } from '@mui/material'
import RandomAvatar from '../Common/RandomAvatar';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import { useState, useEffect } from 'react';
import { getDoc, doc, query } from 'firebase/firestore';
import database from '../../Firebase';
import {useParams} from 'react-router-dom'

const ChatHeader = () => {
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        console.log(roomId)
        if (roomId) {
            const q = query(doc(database, "rooms", roomId));
            getDoc(q).then((snap) => {
                setRoomName(snap.data().name)
            });
        }
    }, [roomId])
    
    return (
        <div className="chat__header">
            <RandomAvatar />

            <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
                <p>Last Seen today...</p>
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
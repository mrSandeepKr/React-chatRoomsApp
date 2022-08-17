import React from 'react'
import { IconButton } from '@mui/material'
import RandomAvatar from '../RandomAvatar';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';

const ChatHeader = () => {
    return (
        <div className="chat__header">
            <RandomAvatar />

            <div className='chat__headerInfo'>
                <h3>Room</h3>
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
import React from 'react'
import {Avatar, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { useStateValue } from '../../StateProvider';

const Header = () => {
    const  [{user}] = useStateValue()

    return (
        <div className='sidebar__header'>
            <Avatar src = {user?.photoURL} />

            <div className='sidebar__headerBtns'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
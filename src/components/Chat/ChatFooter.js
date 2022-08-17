import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import React, { useState } from 'react'

const ChatFooter = () => {
    const [input, setInput] = useState("")

    const sendMessage = (e) => { 
        e.preventDefault()
        console.log('You types>>>', input)
        setInput('')
    }

    return (
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input
                    value={input}
                    onChange= {(e) => setInput(e.target.value)}
                    type='text'
                    placeholder='Type a message' />

                <button onClick={sendMessage}> Send a message</button>
            </form>
            <MicIcon />
        </div>
    )
}

export default ChatFooter
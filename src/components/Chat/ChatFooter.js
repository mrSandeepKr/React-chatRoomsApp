import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import React, { useState } from 'react'
import database from '../../Firebase';
import { serverTimestamp, setDoc, doc, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const ChatFooter = () => {
    const {roomId} = useParams()
    const [input, setInput] = useState("")
    const [{ user }] = useStateValue()

    const sendMessage = (e) => {
        e.preventDefault()
        console.log(user, roomId)

        const ref = doc(collection(database, 'rooms', `${roomId}`, 'messages'))
        setDoc(ref, {
            content: input,
            name: user.displayName,
            timestamp: serverTimestamp()
        })
        .then(() => {
            setInput('')
        })
    }

    return (
        <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type='text'
                    placeholder='Type a message' />

                <button onClick={sendMessage}> Send a message</button>
            </form>
            <MicIcon />
        </div>
    )
}

export default ChatFooter
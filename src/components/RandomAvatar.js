import React from 'react'
import { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'

const RandomAvatar = () => {
    const [seed, setseed] = useState('');
    let imageSrc = `https://avatars.dicebear.com/api/male/${seed}.svg`

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <Avatar src = {imageSrc} />
    )
}

export default RandomAvatar
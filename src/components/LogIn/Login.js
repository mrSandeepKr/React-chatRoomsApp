import React from 'react'
import Button from '@mui/material/Button'
import './login.css'
import { auth, provider } from '../../Firebase'
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const Login = () => {
    const [user, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            }).then(() => {
                console.log(user)
            }).catch((error) => {
                alert(error.message)
            })
    }

    onAuthStateChanged(auth, (u) => {
        if (u) {
            dispatch({
                type: actionTypes.SET_USER,
                user: u
            })
        }
        else {
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            })
        }
    });

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png' alt='xyz' />
                <div className="login__text">
                    Let's login to WhatsApp
                </div>
                <Button type='submit' onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login